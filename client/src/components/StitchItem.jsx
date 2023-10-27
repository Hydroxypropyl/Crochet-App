import React from 'react';
import styles from "../styles/glossary.module.css"

const StitchItem = ({ name, image }) => {
    const toggleFavorite = {
        //TODO: add/remove to the list of favorite and sync with server
    }

    return (
        <div className={styles.stitch_container}>
            <figure className={styles.stitch_image}>
            {image && 
              <img src={`data:${image.contentType};base64,${image}`} alt=""/>
            }
              <figcaption className={styles.stitch_name}>{name}</figcaption>
            </figure>
            <button className={styles.favorite_button} onClick={() => toggleFavorite}>FAV</button>
        </div>
    )
}

export default StitchItem