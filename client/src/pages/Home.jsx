import { Link } from '@mui/material'
import { SearchField, StitchItem } from '../components'
import styles from "../styles/frontpage.module.css"

const Home = () => {
  return (

    <div className={styles.container}>
      <SearchField />
      <Link underline='none' href='/abbreviation' color="darkBlue">Abbreviation Guide</Link>
      <h2>Stitch of the day</h2>
      <StitchItem />
    </div>
  )
}

export default Home
