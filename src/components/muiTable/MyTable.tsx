/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';

import { ChoosenTable } from '../../types/Types';

type functionType = (
  choosenTable: ChoosenTable,
  id: number,
) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
  title: ChoosenTable;
  count: number;
  rows: Array<any>;
  columnNamesRu: Array<string>;
  columnNames: Array<string>;
  limit: number;
  onPageChange(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void;
  page: number;
  onLimitChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  pKey: string;
  onDelete: functionType;
}

const MyTable: FC<IProps> = ({
  title,
  count,
  rows,
  columnNamesRu,
  columnNames,
  limit,
  onLimitChange,
  page,
  onPageChange,
  pKey,
  onDelete,
}) => {
  const [hoveredEl, setHoveredEl] = useState<string>('');
  if (!count) return null;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5">id</Typography>
              </TableCell>
              {columnNamesRu.map((value, ind) => (
                <TableCell align="left" key={value + ind}>
                  <Typography variant="h5">{value}</Typography>
                </TableCell>
              ))}
              <TableCell align="center">
                <Typography variant="h5">Удаление</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={pKey + row[pKey] + 0}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row[pKey]}
                </TableCell>
                {columnNames.map((value, ind) => {
                  return (
                    <TableCell key={value + row[value] + ind} align="left">
                      {JSON.stringify(row[value]).replaceAll('"', '').trim()}
                    </TableCell>
                  );
                })}
                <TableCell align="center" sx={{ padding: 0 }}>
                  <IconButton
                    color={hoveredEl === pKey + row[pKey] + 0 ? 'error' : 'secondary'}
                    onMouseEnter={() => {
                      setHoveredEl(pKey + row[pKey] + 0);
                    }}
                    onMouseLeave={() => setHoveredEl('')}
                    onClick={onDelete(title, Number.parseInt(JSON.stringify(row[pKey])))}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TablePagination
                count={count}
                page={page}
                onPageChange={onPageChange}
                rowsPerPage={limit}
                onRowsPerPageChange={onLimitChange}
              />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyTable;
