import React, { useState, useEffect } from 'react';
import api from '../api';
import ProjectItem from '../components/projectItem';
import Button from '@mui/material/Button';
import styles from '../styles/project_list.module.css';
import { useNavigate } from "react-router-dom";

const ProjectList = ({ setAndPopMessage }) => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        api.getAllProjects().then(res => {
            if (res.success) {
                setProjects(res.projects);
            } else {
                setAndPopMessage(res.message, res.severity);
                navigate(res.location);
            }
        })
    }, [setAndPopMessage, navigate]);

    return (
        <div>
            <div className={styles.projectList_container}>
            {projects.length ? (
                projects.map((project) => (
                    <ProjectItem className={styles.projectItem} name={project.name} id={project._id} image={project.projectImage} counters={project.counters}></ProjectItem>

                ))
            ) : (
                <p>No project yet!</p>
            )} 
            </div>
            <div>
                <Button variant="contained" color="darkBlue">Create new project</Button>
                <Button variant="contained" color="lightBlue">Start without a project</Button>
            </div>
        </div>
    )
}

export default ProjectList