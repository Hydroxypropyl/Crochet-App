const express = require('express')

const ProjectCtrl = require('../controllers/project-ctrl')

const router = express.Router()

//router.post('/', StitchCtrl.createStitch)
router.get('/:id', ProjectCtrl.getProjectById)
router.get('/', ProjectCtrl.getProjects)
//router.get('/new', ProjectCtrl.createNewProject)

module.exports = router
