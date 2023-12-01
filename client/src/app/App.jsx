import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import api from '../api'
import { Counters, Favorites, Home, StitchGlossary, Login, Signup, Abbreviation,  ProjectList, NewProjectForm, StitchPage } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, TopBanner } from '../components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
      main: '#',
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
        ...(mode==="light"
        ? {
          root: {
            backgroundColor: '#FFBAF0',
          }
        }
        : {
          root: {
            backgroundColor:'#D41D6D',
          }
        })
    },
    } ,
    MuiLink: {
      styleOverrides: {
        ...(mode==="light"
        ? {
            root: {
              display: "flex",
              aligItems: "center",
              justifyContent: "center",
              textAlign: 'center',
              backgroundColor: '#D5E1FF',
              color: 'inherit',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              height: '30px',
              width: '200px'
            }
          }:{
            root: {
              display: "flex",
              aligItems: "center",
              justifyContent: "center",
              textAlign: 'center',
              backgroundColor: '#8FB3FF',
              color: 'inherit',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              height: '30px',
              width: '200px',
            }
          }),
        
      }
    }
  },
});

const App = () => {
  const [colorMode, setColorMode] = useState('light');
  const [stitches, setStitches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Default message");
  const [severity, setSeverity] = useState("info");
  const [dayStitch, setDayStitch] = useState({})

  const handleClose = (event) => {
    setOpen(false);
  };

  //Set the message and the severity ("error", "info", "success", "warning") and pop up a message for 2 sec
  const setAndPopMessage = (message, severity = "info") => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  }

  useEffect(() => {
      api.getAllStitches().then(res => {
          console.log(res);
          setStitches(res);
          setDayStitch(res[new Date().getDate() % res.length])
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

  const sortData = (event) => {
    if (event.target.value === 'A to Z') {
      const sorted = filteredStitches.slice(0).sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
      setStitches(sorted)
    } else if (event.target.value === 'Z to A') {
      const sorted = filteredStitches.slice(0).sort((a,b) => b.name.charCodeAt(0) - a.name.charCodeAt(0));
      setStitches(sorted)
    } else if (event.target.value === 'Easiest first') {
      const sorted = filteredStitches.slice(0).sort((a,b) => a.difficulty - b.difficulty);
      setStitches(sorted)
    } else if (event.target.value === 'Hardest first') {
      const sorted = filteredStitches.slice(0).sort((a,b) => b.difficulty - a.difficulty);
      setStitches(sorted)
    } else if (event.target.value === '') {
      setStitches(filteredStitches)
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
            <Router>
            <TopBanner onToggleColorMode={toggleColorMode} colorMode={colorMode} setAndPopMessage={setAndPopMessage}/>
                <Routes>
                    <Route path="/" element={<Home dayStitch={dayStitch} filteredStitches={filteredStitches} setSearchQuery={setSearchQuery} />} />
                    <Route path="favorites" element={<ProjectList setAndPopMessage={setAndPopMessage} />} />
                    <Route path="counters/:id" element={<Counters setAndPopMessage={setAndPopMessage}/>} />
                    <Route path="counters" element={<Counters />} />
                    <Route path="stitches" element={<StitchGlossary setAndPopMessage={setAndPopMessage} sortData={sortData} filteredStitches={filteredStitches} setSearchQuery={setSearchQuery} />} />
                    <Route path="login" element={<Login setAndPopMessage={setAndPopMessage} />} />
                    <Route path="signup" element={<Signup setAndPopMessage={setAndPopMessage} />} />
                    <Route path="/projects/new" element={<NewProjectForm setAndPopMessage={setAndPopMessage} />} />
                    <Route path="projects" element={<ProjectList setAndPopMessage={setAndPopMessage} />} />
                    <Route path="abbreviation" element={<Abbreviation />} />
                    <Route path="stitches/:id" element={<StitchPage />} />
                </Routes>
                <NavBar />
            </Router>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
              </Alert>
            </Snackbar>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
