import { Button } from '@mui/material';
import React, { FC } from 'react';

import { PositionsList } from '../../types/Types';

interface IProps {
  onPositionChange(newPos: PositionsList): void;
}

const Menu: FC<IProps> = ({ onPositionChange }) => {
  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() => {
        onPositionChange(PositionsList.tablesList);
      }}
      sx={{ width: '220px' }}
    >
      Список таблиц
    </Button>
  );
};

export default Menu;
