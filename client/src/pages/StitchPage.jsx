import React from 'react';
import styles from '../styles/stitchPage.module.css';

const StitchPage = ({ name, image, difficultyId, instructions }) => {
    const toggleFavorite = {
        //TODO: add/remove to the list of favorite and sync with server
    }
    return (
        <div className={styles.stitch_page}>
            <button className={styles.favorite_button} onClick={() => toggleFavorite}>FAV</button>
            <div className={styles.top_image}>
                <h1>{name}</h1>
                <img src={`data:${image.contentType};base64,${image}`} alt=""/>
            </div>
            
            <p>Difficulty :</p>
            <h2>Instructions</h2>
            <p>{instructions}</p>
            </div>
    )
}

export default StitchPage