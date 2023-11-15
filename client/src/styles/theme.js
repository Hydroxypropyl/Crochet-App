import { createTheme } from '@mui/material/styles';

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

export default theme;