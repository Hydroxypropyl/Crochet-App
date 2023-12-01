const Project = require('../models/project-model')
const fs = require('fs')
const path = require('path')
const loginControl = require('../controllers/login-ctrl')
const DEBUG = false; //Set to false when you want to retrieve stitches from database not mock data

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
getProjectById = async (req, res) => {
    //TODO
}

//Retrieve the project that match the user token
getProjects = async (req, res) => {
    // Retrieve the authorization header from the request
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        // No valid token
        return res.status(202).json({
            severity: "info",
            success: false,
            location: "/login",
            message: "Please login before "
        })

    }

    // Extract the token from the header
    const token = authorizationHeader.substring('Bearer '.length);

    const id = await loginControl.getUserIdByToken(token);

    if (!id) {
        // Token is invalid
        return res.status(202).json({
            success: false,
            severity: "error",
            message: 'Invalid token, please logout and login again!',
            location: "/",
        })
    }
    
    const projects = await Project.find({user: id});

    return res.status(202).json({
        success: true,
        severity: "success",
        message: 'Retrieve the projects successfully!',
        projects: projects,
    })
}


createNewProject = async(req, res) => {
    if (!req.body) {
        return res.status(202).json({
            success: false,
            severity: "warning",
            message: 'Empty submit',
        })
    }

    // Extract the token from the header
    const authorizationHeader = req.headers['authorization'];
    const tokenNewProj = authorizationHeader.substring('Bearer '.length);

    const id = await loginControl.getUserIdByToken(tokenNewProj);
    if (!id) {
        // Token is invalid
        return res.status(202).json({
            success: false,
            severity: "error",
            message: 'Invalid token, please logout and login again!',
        })
    }

    const name = req.body.data.name
    const image = req.body.data.selectedFile

    const newProject = new Project({
        name: name,
        projectImage: image,
        counters: [0],
        user: id,
    });

    // Save the project to database and redirect to his page
    try {
        const savedProject = await newProject.save();
        const projectId = savedProject._id.toString();
        return res.status(202).json({
            success: true,
            severity: "success",
            location: `/counters/${projectId}`,
            message: "Project created!"
        })
        } catch (error) {
        return res.status(500).json({
            success: false,
            severity: "error",
            message: "Error when saving into database!"
        });
    }
}
module.exports = {
    getProjectById,
    getProjects,
    createNewProject,
}
