const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
        name: { type: String, required: true },

        projectImage: {
            data: Buffer,
            contentType: String
        },

        counters: [
          {
            type: Number
          }
        ],
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }

    })

Project.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      returnedObject.image = returnedObject.projectImage ? Buffer.from(returnedObject.projectImage.data, 'binary').toString('base64') : null
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.projectImage
    }
})


module.exports = mongoose.model('projects', Project)

