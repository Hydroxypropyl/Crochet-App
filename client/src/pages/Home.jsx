import { Link, Box } from '@mui/material'
import { SearchField, StitchItem } from '../components'

const Home = () => {
  return (

    <Box sx={{ flexGrow: 1, margin: 1, display: 'grid', justifyItems: 'center', gap: '25px', padding: '25px 0' }}>
      <SearchField />
      <Link underline='none' href='/abbreviation'>Abbreviation Guide</Link>
      <h2>Stitch of the day</h2>
      <StitchItem />
    </Box>
  )
}

export default Home
