import {
  Alert,
  Box,
  Button,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';

import request from '../../api/request';
import { ChoosenTable } from '../../types/Types';
import {
  BonusRow,
  ChiefRow,
  DepotRow,
  LocomotiveRow,
  RepairRow,
  TableData,
  WorkerRow,
} from '../../types/Types';
import MyTable from '../muiTable/MyTable';

interface Data {
  count: number;
  rows: Array<BonusRow | ChiefRow | DepotRow | LocomotiveRow | RepairRow | WorkerRow>;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px',
  width: 600,
  bgcolor: '#2D355E',
  color: 'white',
  border: '1px solid #EFEFEF',
  boxShadow: 24,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '20px',
  p: 1,
};

const Table: FC<TableData> = ({ id, title, columnNames, columnNamesRu, pKey }) => {
  const [tableData, setTableData] = useState<Data>({
    count: 0,
    rows: [],
  });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [pushOpened, setPushOpened] = useState<boolean>(false);
  const [pushSeverity, setPushSeverity] = useState<boolean>(false);
  const [addingModalIsOpen, setAddingModalIsOpen] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<Array<any>>(
    Array.from({ length: columnNames.length }).map(() => ''),
  );

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getData = async (choosenTable: ChoosenTable) => {
    if (choosenTable) {
      const resp = await request.getAllRows(choosenTable, limit, page);
      if (resp.count) {
        setTableData(resp);
      } else {
        alert('Таблица пуста');
      }
    }
  };

  const postData = async (choosenTable: ChoosenTable) => {
    if (choosenTable) {
      const data = inputValues.reduce(
        (a, v, ind) => ({ ...a, [columnNames[ind]]: v }),
        {},
      );
      const resp = await request.addRow(choosenTable, data);

      if (resp.count) {
        setPushSeverity(true);
        setAddingModalIsOpen(false);
      } else {
        setPushSeverity(false);
      }
      setPushOpened(true);
      getData(choosenTable);
    }
  };

  const deleteRow = (choosenTable: ChoosenTable, id: number) => async () => {
    if (choosenTable) {
      const resp = await request.deleteRow(title, id);

      if (resp.count) {
        setPushSeverity(true);
        setAddingModalIsOpen(false);
      } else {
        setPushSeverity(false);
      }
      setPushOpened(true);
      getData(choosenTable);
    }
  };

  useEffect(() => {
    getData(title);
  }, []);

  useEffect(() => {
    getData(title);
  }, [page, limit]);

  return (
    <>
      <Typography textAlign="center" variant="h4">{`Таблица ${title}`}</Typography>
      <MyTable
        {...tableData}
        title={title}
        columnNames={columnNames}
        columnNamesRu={columnNamesRu}
        limit={limit}
        onLimitChange={handleChangeRowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        pKey={pKey}
        onDelete={deleteRow}
      />
      <Button
        sx={{
          width: '220px',
        }}
        onClick={() => getData(title)}
      >
        Обновить
      </Button>
      <Button
        sx={{
          width: '220px',
        }}
        color="primary"
        variant="contained"
        onClick={() => setAddingModalIsOpen(true)}
      >
        Добавить запись
      </Button>
      <Modal open={addingModalIsOpen} onClose={() => setAddingModalIsOpen(false)}>
        <Box sx={style}>
          {columnNames.map((column, ind) => (
            <TextField
              placeholder={columnNamesRu[ind]}
              key={`${column}+${ind}`}
              size="small"
              value={inputValues[ind]}
              onChange={(e) => {
                setInputValues((old) => {
                  const newArr = [...old];
                  newArr[ind] = e.target.value;
                  return newArr;
                });
              }}
            />
          ))}
          <Button
            sx={{
              width: '220px',
            }}
            color="primary"
            variant="contained"
            onClick={() => {
              postData(title);
            }}
          >
            Добавить
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={pushOpened}
        autoHideDuration={3000}
        onClose={() => setPushOpened(false)}
      >
        <Alert
          onClose={() => setPushOpened(false)}
          severity={pushSeverity ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {pushSeverity ? 'Успешно' : 'Ошибка'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Table;
