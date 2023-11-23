const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Counter = new Schema({
        value: { type: Number, required: true },
        counterType: { type: String, required: true },
        project: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project'
        }
    })

Counter.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('counters', Counter)