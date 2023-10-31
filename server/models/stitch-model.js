const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stitch = new Schema(
    {
        name: { type: String, required: true },
        difficulty: { type: Number, required: true },
        image: { type: String, required: true },
        id: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('stitches', Stitch)