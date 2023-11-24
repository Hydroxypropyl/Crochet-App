const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Token = mongoose.Schema({
  value: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true,
  },
})

Token.plugin(uniqueValidator)

Token.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('tokens', Token)