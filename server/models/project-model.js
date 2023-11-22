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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Counter'
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
      returnedObject.image = Buffer.from(returnedObject.projectImage.data, 'binary').toString('base64')
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.projectImage
    }
})


module.exports = mongoose.model('projects', Project)

