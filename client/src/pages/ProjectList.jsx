import React, { useState, useEffect } from 'react';
import api from '../api';
import ProjectItem from '../components/projectItem';
import Button from '@mui/material/Button';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.getAllProjects().then(res => {
            setProjects(res);
        })
    }, [])

    return (
        <div>
            <div className="projectList_container">
            {projects.map((project) => (
                <ProjectItem label={project.label} id={project.id} image={project.image} rowCount={project.rowCount}></ProjectItem>

            ))}
            </div>
            <div>
                <Button>Create new project</Button>
                <Button>Start without a project</Button>
            </div>
        </div>
    )
}

export default ProjectList