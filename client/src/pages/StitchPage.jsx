import React,  { useState, useEffect } from 'react';
import styles from '../styles/stitchPage.module.css';
import { useParams } from 'react-router-dom';
import api from '../api'
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

const StitchPage = () => {
    const { id } = useParams();

    const [isFavorite, setIsFavorite] = useState(false);
    const [stitch, setStitch] = useState([]);

     useEffect(() => {
        api.getStitchById(id).then(res => {
            console.log(res);
            setStitch(res.data);
        })
    }, [id]);

    console.log(stitch)
    const toggleFavorite = async () => {
      let success = true;//To modify according to the result of the request
      if (success) {
        setIsFavorite(!isFavorite);
      }
    }

    const separateList = () => {
        if (!stitch.instructions) {
            return ""; // or some fallback content if instructions are not available yet
        }
        // Split the string into an array of items based on the digit, dot, and space
        const itemsArray = stitch.instructions.split(/\d+\. /);

        // Remove the first empty element (due to the initial split)
        itemsArray.shift();

        // Create an ordered list element
        const olElements = itemsArray.map((item, index) => (
            <li key={index}>{item.trim()}</li>
        ));

        return <ol>{olElements}</ol>;
    };

    return (
        <div className={styles.stitch_page}>

            <h1 className={styles.stitch_name}>{stitch.name}</h1>

            <div className={styles.diff_and_fav}>
                <p>Difficulty : {Array.from({ length: stitch.difficulty }).map((_, index) => (
                        <StarIcon key={index} color="primary" />
                        ))}
                        {Array.from({ length: 5-stitch.difficulty }).map((_, index) => (
                        <StarOutlineIcon key={index} color="primary" />
                        ))}
                </p>
                        
                <IconButton color="primary" aria-label="add to favorites" onClick={toggleFavorite}>
                    {isFavorite
                        ? <FavoriteIcon/>
                        : <FavoriteBorderIcon/>
                    }
                </IconButton>
            </div>

            <div className={styles.top_image}>
                {stitch.image ? 
                    ( <img src={`data:${stitch.image.contentType};base64,${stitch.image}`} alt=''/>) 
                    : (<BrokenImageIcon style={{ fontSize: 100 }} color="primary" />)
                }
            </div>
            
            <h2>Instructions :</h2>
            <div>
            {separateList()}
            </div>
        </div>
    )
}

export default StitchPage