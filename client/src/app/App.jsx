import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Counters, Favorites, Home, StitchGlossary, StitchInsert, StitchUpdate } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, TopBanner } from '../components';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// How to dark mode in Material UI https://mui.com/material-ui/customization/dark-mode/

const theme = createTheme({
    palette: {
      lightPink: {
        main: '#FFBAF0',
        // light: '#E9DB5D',
        // dark: '#A29415',
        contrastText: '#3B4948',
      },
      darkPink: {
        main: '#D41D6D',
        // light: '#E9DB5D',
        // dark: '#A29415',
        contrastText: '#3B4948',
      }
    },
    components: {
        // Name of the component
        MuiToolbar: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                backgroundColor: '#FFBAF0',
              },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#3B4948',
                }
            }
        } 
      },
  });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TopBanner />
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="counters" element={<Counters />} />
                    <Route path="stitches" element={<StitchGlossary />}>
                      <Route path="glossary" element={<StitchGlossary />} />
                      <Route path="create" element={<StitchInsert />} />
                      <Route
                          path="update/:id" element={<StitchUpdate />}
                      />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App