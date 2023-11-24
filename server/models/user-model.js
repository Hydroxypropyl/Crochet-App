const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }
  ],
  favoriteStitches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stitch'
    }
  ],
})

User.plugin(uniqueValidator)

User.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', User)