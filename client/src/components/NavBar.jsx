import { useState } from 'react';

import { styled } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListIcon from '@mui/icons-material/List';
import Paper from '@mui/material/Paper';
import TimerIcon from '@mui/icons-material/Timer';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [value, setValue] = useState('recents');

    const StyledNav = styled(BottomNavigation)(() => ({
        backgroundColor: '#D5E1FF',
      }));

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation color="lightBlue"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" to="/" component={Link} icon={<HomeIcon />} />
          <BottomNavigationAction label="Stitches" to="/stitches" component={Link} icon={<ListIcon />} />
          <BottomNavigationAction label="Favorites" to="/favorites" component={Link} icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Counters" to="/counters" component={Link} icon={<TimerIcon />} />
        </BottomNavigation>
    </Paper>
  )
}

export default NavBar
