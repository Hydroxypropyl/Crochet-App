const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stitch = new Schema({
        name: { type: String, required: true },
        difficulty: { type: Number, required: true },
        stitchImage: {
            data: Buffer,
            contentType: String
        },
        instructions: String,
    })

Stitch.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      try {
        returnedObject.image = Buffer.from(returnedObject.stitchImage.data, 'binary').toString('base64')
      } catch(e) {
        //Error occured
        //TODO push a default image
      }
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.stitchImage
    }
})

module.exports = mongoose.model('stitches', Stitch)