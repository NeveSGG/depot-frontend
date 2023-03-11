import { Box, Button } from '@mui/material';
import React, { FC } from 'react';

import tables from '../../assets/data/tables';
import { PositionsList, TableData } from '../../types/Types';

interface IProps {
  onPositionChange(newPos: PositionsList): void;
  onChoosenTableChange(newTable: TableData): void;
}

const TablesList: FC<IProps> = ({ onPositionChange, onChoosenTableChange }) => {
  return (
    <Box
      sx={{
        width: '500px',
        justifyContent: 'space-evenly',
        display: 'flex',
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
            onPositionChange(PositionsList.table);
            onChoosenTableChange(item);
          }}
          sx={{ width: '150px' }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );
};

export default TablesList;
