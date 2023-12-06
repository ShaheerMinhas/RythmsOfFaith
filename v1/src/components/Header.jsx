import React from 'react';
import { AppBar, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';
import MosqueOutlinedIcon from '@mui/icons-material/MosqueOutlined';

// Create a custom theme with a purple primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // Set the main color to purple (change this hex code as desired)
    },
  },
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <MosqueOutlinedIcon />
          <Typography variant="h6">
            Rythms Of Faith
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;