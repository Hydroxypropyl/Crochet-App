const Stitch = require('../models/stitch-model')
const fs = require('fs')
const path = require('path')

/*
//Create a stitch using the body content of the request
createStitch = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stitch',
        })
    }

    const stitch = new Stitch({
        name: req.body.name,
        difficulty: req.body.difficulty,
        stitchImage: {
            data: fs.readFileSync(path.resolve(__dirname, './crochetImages/' + req.body.image)),
            contentType: 'image/png'
        },
        instructions: req.body.instructions,
    })

    if (!stitch) {
        return res.status(400).json({ success: false, error: err })
    }

    stitch
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: stitch._id,
                message: 'Stitch created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Stitch not created!',
            })
        })
}

//Update a stitch using his id and the content of the body of the request
updateStitch = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Stitch.findOne({ _id: req.params.id }, (err, stitch) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Stitch not found!',
            })
        }
        stitch.name = body.name
        stitch.image = body.image
        stitch.difficulty = body.difficulty
        stitch
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Stitch updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Stitch not updated!',
                })
            })
    })
}

//Delete a stitch using his id
deleteStitch = async (req, res) => {
    await Stitch.findOneAndDelete({ _id: req.params.id }, (err, stitch) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stitch) {
            return res
                .status(404)
                .json({ success: false, error: `Stitch not found` })
        }

        return res.status(200).json({ success: true, data: stitch })
    }).catch(err => console.log(err))
}*/

//Retrieve a specific stitch according to his id
getStitchById = async (req, res) => {

    try {
        const stitch = await Stitch.findById(req.params.id)
        if (stitch) {
            return res.status(200).json({ success: true, data: stitch })
        } else {
            return res
            .status(404)
            .json({ success: false, error: `Stitch not found` })
        }
      } catch(exception) {
        err => console.log(err)
      }
}

//Retrieve all the stitches in the database
getStitches = async (req, res) => {

    const stitches = await Stitch.find({});
    return res.status(200).json(stitches);
}

module.exports = {
    // createStitch,
    getStitchById,
    getStitches,
}
