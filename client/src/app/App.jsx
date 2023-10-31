import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Counters, Favorites, Home, StitchGlossary, StitchInsert, StitchUpdate } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, TopBanner } from '../components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';


// How to dark mode in Material UI https://mui.com/material-ui/customization/dark-mode/


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#D41D6D',
      contrastText:'#121212'
    },
    lightPink: {
        main: '#FFBAF0',
        light: '#FFBAF0',
        dark: '#D41D6D',
        contrastText: '#121212',
    },
    darkPink: {
      main: '#D41D6D',
      light: '#D41D6D',
      dark: '#D41D6D',
      contrastText: '#121212',
    }, 
    lightBlue: {
      main: '#D5E1FF',
      light: '#D5E1FF',
      dark: '#D41D6D',
      contrastText: '#121212',
    },
    darkBlue: {
      main: '#8FB3FF',
      light: '#8FB3FF',
      dark: '#D41D6D',
      contrastText: '#121212',
    },
  ...(mode === 'light'
    ? {
        text: {
          primary: '#121212',
          secondary: '#121212',
        },
    }
    : {
        background: {
          default: '#121212',
          paper: '#121212',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
        },
      }),
  },
components: {
  MuiToolbar: {
    styleOverrides: {
	      root: {
          // Some CSS
          backgroundColor: '#FFBAF0',
          fontSize : 'bold',
          color : '#121212'
	      },
    },
  },
  MuiBottomNavigation: {
    styleOverrides: {
      ...(mode==="light"
      ? {
	      root: {
          // Some CSS
          backgroundColor: '#D5E1FF',
	      },
     }
     : {
        root: {
          backgroundColor: '#8FB3FF',
        },
      }),
    },
  },
},
});

/**
const theme = createTheme({
    palette: {
      mode : "dark",
      lightPink: {
        main: '#FFBAF0',
        light: '#FFBAF0',
        dark: '#A29415',
        contrastText: '#3B4948',
      },
      darkPink: {
        main: '#D41D6D',
        light: '#E9DB5D',
        dark: '#FFFF00',
        contrastText: '#3B4948',
      }, 
      lightBlue: {
      	main: '#D5E1FF',
      	contrastText: '#000',
      },
      darkBlue: {
        main: '#8FB3FF',
        contrastText: '#000',
      },
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                "&:hover": {
     			backgroundColor: '#D41D6D',
   		},
              },
            },
        },
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
*/


const App = () => {
const [colorMode, setColorMode] = useState('light');

// The function that toggles between themes
const toggleColorMode = () => {
  // if the theme is not light, then set it to dark
  if (colorMode === 'light') {
    setColorMode('dark');
  // otherwise, it should be light
  } else {
    setColorMode('light');
  }
}

const theme = createTheme(getDesignTokens(colorMode));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
            <TopBanner />
            <Button onClick={toggleColorMode}>Toggle</Button>
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
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
