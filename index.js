const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

let persons = [
    {
        name: "Arto Hellas",
        number: "3132-3231-33",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "123-456",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "53-4222144-567",
        id: 3
    }
]

app.get('/api/info', (req, res) => {
    const count = persons.length
    const timestamp = Date(Date.now())
    res.send(`<h2>Phonebook has info for ${count} people.</h2><h2>${timestamp}</h2>`)
})

app.get('/api/', (req, res) => {
    res.send('<h1>Hello Page!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if(!body.name) {
        return res.status(400).json({ error: "Name is missing."})
    }

    if(!body.number) {
        return res.status(400).json({ error: "Number is missing."})
    }

    const names = persons.map(person => person.name)
    if(names.includes(body.name)) {
        return res.status(400).json( {error: "Name already in phonebook."})
    }

    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 100000000)
    }

    persons = persons.concat(person)

    res.json(persons)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})