// React
import React from 'react';

// Material UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Custom components
import Dashboard from './components/Dashboard/Dashboard';

// Custom styles
import './App.css';


const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#5C93CE',
      },
      secondary: {
          main: '#f5f5f5',
          light: '#6c7373',
          dark: '#3c3c3d'
      },
      action: {
        main: '#005f85'
      },
      error: {
          main: '#a51417',
      },
      warning: {
          main: '#f8be15',
      },
      accent: {
          main: '#344A5F',
      },
      success: {
          main: '#005f85',
      }
  }
});


function App() {
    // BREAKPOINTS
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 960px
    // lg, large: 1280px
    // xl, extra-large: 1920px
  return (
        <>
          <ThemeProvider theme={theme}>
            <Dashboard />
          </ThemeProvider>
        </>
  );
};


export default App;
