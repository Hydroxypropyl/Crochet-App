const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stitch = new Schema({
        name: { type: String, required: true },
        difficulty: { type: Number, required: true },
        image: {
            data: Buffer,
            contentType: String
        },
        instructions: String,
    })

Stitch.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('stitches', Stitch)