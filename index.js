require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./Models/Person')

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

morgan.token('body', (req, res) => { return JSON.stringify(req.body)})
//app.use(morgan('tiny'))
app.use(morgan(':method :url :status :response-time ms - :body'))

app.get('/api/info', (req, res) => {
    const timestamp = Date(Date.now())
    Person.find({})
        .then(persons => {
            res.send(`<h2>Phonebook has info for ${persons.length} people.</h2><h2>${timestamp}</h2>`)
        })
})

app.get('/api/', (req, res) => {
    res.send('<h1>Hello Page!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({})
        .then(persons => {
            res.json(persons)
        })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if(person) {
                res.json(person.toJSON())
            } else {
                res.status(204).end()
            }
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    if(!body.name) {
        return res.status(400).json({ error: 'Name is missing.' })
    }

    if(!body.number) {
        return res.status(400).json({ error: 'Number is missing.' })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            res.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON())
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if(error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({ error: 'Bad id format' })
    } else if(error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})