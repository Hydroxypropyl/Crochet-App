import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate("/login");
  }
    return (<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crochet App
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="darkPink"
            aria-label="account"
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default TopBanner