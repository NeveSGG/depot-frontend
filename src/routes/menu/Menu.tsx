import { Box, Button, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import request from '../../api/request';
import {
  BonusRow,
  ChiefRow,
  DepotRow,
  LocomotiveRow,
  RepairRow,
  WorkerRow,
} from '../../types/Types';

const Menu: FC = () => {
  const [displayProp, setDisplayProp] = useState<string>('buttons');
  const [choosenTable, setChoosenTable] = useState<string | null>(null);
  const [respData, setRespData] = useState<
    Array<BonusRow | ChiefRow | DepotRow | LocomotiveRow | RepairRow | WorkerRow>
  >([]);

  const getData = async (choosenTable: string) => {
    if (choosenTable) {
      const resp = await request.getAllRows(choosenTable);
      if (resp.count) {
        console.log(resp.rows);
        setRespData(resp.rows);
      } else {
        alert('Таблица пуста');
      }
    }
  };

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
      <Typography
        textAlign="center"
        sx={{
          display: displayProp === 'table' ? 'block' : 'none',
        }}
      >
        {`Таблица ${choosenTable}`}
      </Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setDisplayProp('tablesList');
        }}
        sx={{ display: displayProp === 'buttons' ? 'block' : 'none', width: '220px' }}
      >
        Список таблиц
      </Button>
      <Button
        color="primary"
        variant="contained"
        sx={{ display: displayProp === 'buttons' ? 'block' : 'none', width: '220px' }}
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
            onClick={() => {
              setDisplayProp('table');
              setChoosenTable(item.title);
              getData(item.title);
            }}
            sx={{ width: '150px' }}
          >
            {item.title}
          </Button>
        ))}
      </Box>
      {respData && displayProp === 'table' && (
        <Typography>{JSON.stringify(respData)}</Typography>
      )}
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          if (displayProp === 'tablesList') {
            setDisplayProp('buttons');
          } else if (displayProp === 'table') {
            setRespData([]);
            setDisplayProp('tablesList');
          } else if (displayProp === 'allRows') {
            setDisplayProp('table');
          }
        }}
        sx={{ display: displayProp !== 'buttons' ? 'block' : 'none', width: '220px' }}
      >
        Назад
      </Button>
    </Box>
  );
};

export default Menu;
