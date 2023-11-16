import { Paper, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchField = () => {
  return (
    <Paper
      component="form"
      elevation={2}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '', borderRadius: '25px', width: '75%', maxWidth: '600px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a stitch"
        inputProps={{ 'aria-label': 'search stitch' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchField