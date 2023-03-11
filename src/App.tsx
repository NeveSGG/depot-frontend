import {
  Box,
  Button,
  createTheme,
  Paper,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { Theme } from '@mui/system';
import React, { FC, useState } from 'react';

import Menu from './components/menu';
import Table from './components/table';
import TablesList from './components/tablesList';
import { PositionsList, TableData } from './types/Types';

const darkTheme: Theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#394c87',
      },
      secondary: {
        main: '#cbcbcb',
      },
      background: {
        default: '#00000e',
        paper: '#000012',
      },
      error: {
        main: '#f51f10',
      },
      text: {
        primary: '#e6e6e6',
      },
    },
  }),
);

const App: FC = () => {
  const [position, setPosition] = useState<PositionsList>(PositionsList.homeMenu);
  const [choosenTable, setChoosenTable] = useState<TableData | null>(null);

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
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {position === PositionsList.homeMenu && (
            <Menu
              onPositionChange={(newPos: PositionsList) => {
                setPosition(newPos);
              }}
            />
          )}
          {position === PositionsList.tablesList && (
            <TablesList
              onPositionChange={(newPos: PositionsList) => {
                setPosition(newPos);
              }}
              onChoosenTableChange={(newTable: TableData) => {
                setChoosenTable(newTable);
              }}
            />
          )}
          {choosenTable && position === PositionsList.table && (
            <Table {...choosenTable} />
          )}

          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              if (position === PositionsList.tablesList) {
                setPosition(PositionsList.homeMenu);
              } else if (position === PositionsList.table) {
                setPosition(PositionsList.tablesList);
              }
            }}
            sx={{
              display: position !== PositionsList.homeMenu ? 'block' : 'none',
              width: '220px',
            }}
          >
            Назад
          </Button>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
