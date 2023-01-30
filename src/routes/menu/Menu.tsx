import { Box, Button } from '@mui/material';
import React, { FC } from 'react';

const Menu: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 220, gap: 1 }}>
      <Button color="primary" variant="contained">
        Список📑таблиц
      </Button>
      <Button color="primary" variant="contained">
        История🕒изменений
      </Button>
    </Box>
  );
};

export default Menu;
