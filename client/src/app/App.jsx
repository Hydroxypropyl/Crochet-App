import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Counters, Favorites, Home, StitchGlossary, Login, Signup } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, TopBanner } from '../components';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme'; 

// How to dark mode in Material UI https://mui.com/material-ui/customization/dark-mode/

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TopBanner />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="counters" element={<Counters />} />
                    <Route path="stitches" element={<StitchGlossary />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
                <NavBar />
            </Router>
        </ThemeProvider>
    )
}

export default App