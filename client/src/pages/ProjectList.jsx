import React, { useState, useEffect } from 'react';
import api from '../api';
import ProjectItem from '../components/projectItem';
import Button from '@mui/material/Button';
import styles from '../styles/project_list.module.css';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; 
import Grid from '@mui/system/Unstable_Grid';

const ProjectList = ({ setAndPopMessage }) => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        api.getAllProjects().then(res => {
            if (res.success) {
                setProjects(res.projects);
                console.log(res.projects);
            } else {
                setAndPopMessage(res.message, res.severity);
                navigate(res.location);
            }
        })
    }, [setAndPopMessage, navigate]);

    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box sx={{ flexGrow: 1, margin: 1}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {projects.length ? (
                        projects.map((project) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={project._id}>
                                <ProjectItem
                                    className={styles.projectItem}
                                    name={project.name}
                                    id={project.id}
                                    image={project.projectImage}
                                    counters={project.counters}
                                />
                            </Grid>
                        ))
                    ) : (
                        <p>No project yet!</p>
                    )}
                </Grid>
            </Box>
            <div className={styles.button_bar}>
                <Button onClick={() => navigate('/projects/new')} variant="contained" color="darkBlue">Create new project</Button>
                <Button onClick={() => navigate('/counters')} variant="contained" color="lightBlue">Start without a project</Button>
            </div>
        </Container>
    )
}

export default ProjectList