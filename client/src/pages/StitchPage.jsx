import React,  { useState, useEffect } from 'react';
import styles from '../styles/stitchPage.module.css';
import { useParams } from 'react-router-dom';
import api from '../api'

const StitchPage = () => {
    const { id } = useParams();
    const [stitch, setStitch] = useState([]);

    useEffect(() => {
        api.getStitchById(id).then(res => {
            console.log(res);
            setStitch(res);
        })
    }, [id]);

    const toggleFavorite = {
        //TODO: add/remove to the list of favorite and sync with server
    }
    return (
        <div className={styles.stitch_page}>
            <button className={styles.favorite_button} onClick={() => toggleFavorite}>FAV</button>
            <div className={styles.top_image}>
                <h1>{stitch.name}</h1>
                
            </div>
            
            <p>Difficulty : {stitch.difficulty}</p>
            <h2>Instructions</h2>
            <p>{stitch.instructions}</p>
            </div>
    )
}

export default StitchPage