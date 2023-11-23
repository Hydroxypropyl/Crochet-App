import React, { useState, useEffect } from 'react';
import api from '../api';
import ProjectItem from '../components/projectItem';
import Button from '@mui/material/Button';
import styles from '../styles/project_list.module.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.getAllProjects().then(res => {
            setProjects(res);
            console.log(res);
        })
    }, [])

    return (
        <div>
            <div className={styles.projectList_container}>
            {projects.map((project) => (
                <ProjectItem className={styles.projectItem} name={project.label} id={project.id} image={project.image} rowCount={project.rowCount}></ProjectItem>

            ))}
            </div>
            <div>
                <Button variant="contained" color="darkBlue">Create new project</Button>
                <Button variant="contained" color="lightBlue">Start without a project</Button>
            </div>
        </div>
    )
}

export default ProjectList