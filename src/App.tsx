import { Paper, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { Theme } from '@mui/system';
import React, { FC } from 'react';

const darkTheme: Theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#394c87',
      },
      secondary: {
        main: '#172739',
      },
      background: {
        default: '#00000e',
        paper: '#000012',
      },
      error: {
        main: '#f51f10',
      },
      text: {
        primary: '#bdbbbb',
      },
    },
  }),
);

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        square
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        ABCDE
      </Paper>
    </ThemeProvider>
  );
};

export default App;
