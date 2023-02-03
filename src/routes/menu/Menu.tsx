import { Box, Button } from '@mui/material';
import React, { FC, useState } from 'react';

const Menu: FC = () => {
  const [displayProp, setDisplayProp] = useState<string>('buttons');
  const tables = [
    {
      title: 'Bonus',
      id: 0,
    },
    {
      title: 'Repair',
      id: 1,
    },
    {
      title: 'Worker',
      id: 2,
    },
    {
      title: 'Chief',
      id: 3,
    },
    {
      title: 'Locomotive',
      id: 4,
    },
    {
      title: 'Depot',
      id: 5,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setDisplayProp('tablesList');
        }}
        sx={{ display: displayProp === 'buttons' ? 'flex' : 'none', width: '220px' }}
      >
        Список таблиц
      </Button>
      <Button
        color="primary"
        variant="contained"
        sx={{ display: displayProp === 'buttons' ? 'flex' : 'none', width: '220px' }}
      >
        История изменений
      </Button>
      <Box
        sx={{
          display: displayProp === 'tablesList' ? 'flex' : 'none',
          width: '500px',
          justifyContent: 'space-evenly',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {tables.map((item) => (
          <Button
            key={item.id}
            color="primary"
            variant="contained"
            onClick={() => setDisplayProp('table')}
            sx={{ width: '150px' }}
          >
            {item.title}
          </Button>
        ))}
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          if (displayProp === 'tablesList') {
            setDisplayProp('buttons');
          } else if (displayProp === 'table') {
            setDisplayProp('tablesList');
          }
        }}
        sx={{ display: displayProp !== 'buttons' ? 'flex' : 'none', width: '220px' }}
      >
        Назад
      </Button>
    </Box>
  );
};

export default Menu;
