const Project = require('../models/project-model')
const fs = require('fs')
const path = require('path')
const loginControl = require('../controllers/login-ctrl')

//Retrieve the project that match the user token
getCounter = async (req, res) => {
    //Get the query parameter for the id of the counter
    const counter_id = req.params.id;
    if (!counter_id) {
        return res.status(202).json({
            severity: "info",
            success: true,
            message: "You are not in a project for now"
        })
    }


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
    
    //Retrive the project
    const project = await Project.findOne({user: id, _id: counter_id});

    if (!project) {
        res.status(202).json({
            success: false,
            severity: "warning",
            message: 'The content you requested is not yours!',
        })
    } else {
        return res.status(202).json({
            success: true,
            severity: "success",
            message: 'Retrieve the counters successfully!',
            counters: project.counters,
            name: project.name,
        })
    }
}


updateCounter = async(req, res) => {
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
        counters: [0, 0],
        user: id,
    });

    // Save the project to database and redirect to his page
    try {
        const savedProject = await newProject.save();
        const projectId = savedProject._id.toString();
        return res.status(202).json({
            success: true,
            severity: "success",
            location: `/counters?id=${projectId}`,
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
    getCounter,
    updateCounter,
}