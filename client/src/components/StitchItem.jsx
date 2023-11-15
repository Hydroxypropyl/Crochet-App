import React, { useState } from "react"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const StitchItem = ({ name, image, difficulty }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        //TODO: add/remove to the list of favorite and sync with server

      let success = true;//To modify according to the result of the request
      if (success) {
        setIsFavorite(!isFavorite);
      }
    }

    return (         
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 345, position: "relative" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={`data:${image.contentType};base64,${image}`}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    {Array.from({ length: difficulty }).map((_, index) => (
                    <StarIcon key={index} color="primary" />
                    ))}
                    {Array.from({ length: 5-difficulty }).map((_, index) => (
                    <StarOutlineIcon key={index} color="primary" />
                    ))}
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing sx={{position: "absolute", top:0, right:0}}>
                  <IconButton color="primary" aria-label="add to favorites" onClick={toggleFavorite}>
                  {isFavorite
                    ? <FavoriteIcon/>
                    : <FavoriteBorderIcon/>
                  }
                  </IconButton>
                </CardActions>
              </Card>
          </Grid>
    )
}

export default StitchItem