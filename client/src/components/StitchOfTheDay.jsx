import { Paper } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StitchOfTheDay = () => {
  return (
    <Paper>
      <div>
        <p>Stitch of the day</p>
        <FavoriteBorderIcon />
      </div>
      <p>Moss stitch</p>
    </Paper>
  )
}

export default StitchOfTheDay