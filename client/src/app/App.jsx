import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import api from '../api'

import { Counters, Favorites, Home, StitchGlossary, Abbreviation,  ProjectList, NewProjectForm } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, TopBanner } from '../components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
    MuiIconButton: {
      styleOverrides: {
        ...(mode==="light"
        ? {
            root: {backgroundColor:'#FFFFFF',color:'#D41D6D',},        
          }
        : {
            root: {backgroundColor:'#8FB3FF',color:'#FFFFFF'},
        })
      }
    },

    MuiToolbar: {
      styleOverrides: {
          
            ...(mode==="light"
              ? {
                root: {
                  backgroundColor: '#FFBAF0',
                  fontSize : 'bold',
                  color : '#121212'
                }
              }
              : {
                root: {
                  backgroundColor:'#D41D6D',
                  fontSize:'bold',
                  color:'#FFFFF',
                }
              })
            // Some CSS
            
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

    MuiPaper: {
      styleOverrides: {
          root: {
              backgroundColor: '#FFBAF0',
          }
      }
    } ,
    MuiLink: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          backgroundColor: '#D5E1FF',
          color: 'inherit',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          height: '30px',
          width: '200px'
        }
      }
    }
  },
});


const App = () => {
  const [colorMode, setColorMode] = useState('light');
  const [stitches, setStitches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
      api.getAllStitches().then(res => {
          console.log(res);
          setStitches(res);
      })
  }, [])

  console.log('TCL: StitchesList -> render -> stitches', stitches)

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
    }
  };

  const filteredStitches = filterData(searchQuery, stitches);

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
            <TopBanner onToggleColorMode={toggleColorMode} colorMode={colorMode}/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home filteredStitches={filteredStitches} setSearchQuery={setSearchQuery} />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="counters" element={<Counters />} />
                    <Route path="stitches" element={<StitchGlossary filteredStitches={filteredStitches} setSearchQuery={setSearchQuery} />} />
                    <Route path="/projects/new" element={<NewProjectForm />} />
                    <Route path="projects" element={<ProjectList />} />
                    <Route path="abbreviation" element={<Abbreviation />} />
                </Routes>
                <NavBar />
            </Router>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
