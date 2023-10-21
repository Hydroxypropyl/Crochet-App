const Stitch = require('../models/stitch-model')
const DEBUG = true;

//Create a stitch using the body content of the request
createStitch = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stitch',
        })
    }

    const stitch = new Stitch(body)

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
}

//Retrieve a specific stitch according to his id
getStitchById = async (req, res) => {
    if (DEBUG) {
        return res.status(200).json({ success: true, data: {name: "test", difficulty: "4", image: "myImage"} });
    }

    await Stitch.findOne({ _id: req.params.id }, (err, stitch) => {
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
}

//Retrieve all the stitches in the database
getStitches = async (req, res) => {
    if (DEBUG) {
        const stitch1 = new Stitch({
            name: 'Stitch 1',
            difficulty: 3,
            image: 'stitch1.jpg',
            id: '15458412485'
        });
        const stitch2 = new Stitch({
            name: 'Stitch 2',
            difficulty: 2,
            image: 'stitch2.jpg',
            id: '54446194341'
        });
        const stitches = [stitch1, stitch2];
        return res.status(200).json({ success: true, data: stitches});
    }

    await Stitch.find({}, (err, stitches) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!stitches.length) {
            return res
                .status(404)
                .json({ success: false, error: `Stitch not found` })
        }
        return res.status(200).json({ success: true, data: stitches })
    }).catch(err => console.log(err))
}

module.exports = {
    createStitch,
    updateStitch,
    deleteStitch,
    getStitchById,
    getStitches,
}