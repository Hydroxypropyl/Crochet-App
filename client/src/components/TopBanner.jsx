import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const TopBanner = ({ onToggleColorMode, colorMode, setAndPopMessage }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (localStorage.getItem("authToken")) {
      localStorage.removeItem("authToken");
      setAndPopMessage("Successful logout!", "success");
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crochet App
          </Typography>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="toggle-color-mode"
              onClick={onToggleColorMode}
            >
              {colorMode === "light" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton
              size="large"
              aria-label="account"
              onClick={handleClick}
            >
              {localStorage.getItem("authToken") ? (
                <LogoutIcon />
              ) : (
                <LoginIcon />
              )}
              
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBanner;