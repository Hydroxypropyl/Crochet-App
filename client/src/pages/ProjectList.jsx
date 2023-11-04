import React, { useState, useEffect } from 'react';
import api from '../api';
import ProjectItem from '../components/projectItem';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.getAllProjects().then(res => {
            setProjects(res);
        })
    }, [])

    return (
        <div className="projectList_container">
          {projects.map((project) => (
            <ProjectItem label={project.label} id={project.id} image={project.image} rowCount={project.rowCount}></ProjectItem>

          ))}
        </div>
    )
}

export default ProjectList