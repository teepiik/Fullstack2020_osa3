const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => {
        console.log('Database connection to MONGODB!')
    })
    .catch((error) => {
        console.log('Error connecting to MONGODB: ', error.message)
    })

    const personSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 3
        },
        number: {
            type: String,
            required: true,
            minlength: 8
        }
    })
    personSchema.plugin(uniqueValidator)
    
    personSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v
        }
    })

    module.exports = mongoose.model('Person', personSchema)