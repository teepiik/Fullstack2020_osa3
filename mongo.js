const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('First argument is password, second persons name and third the number.')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://uukkel2:${password}@cluster0-wqmpg.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true})

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {
    console.log('Phonebook:')
    Person.find({}).then(persons => {
        persons.forEach(p => {
            console.log(`${p.name} ${p.number}`)
        })
        mongoose.connection.close()
        process.exit(1)
    })   
}


// Adding a person
const name = process.argv[3]
const number = process.argv[4]

const person = new Person({
    name: name,
    number: number
})

person.save().then(response => {
    console.log('Person saved!')
    mongoose.connection.close()
})