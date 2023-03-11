/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from '../types/Types';
import axios from './helpers/axios';

export default {
  async getAllRows(table: string, limit = 15, page = 2): Promise<Response> {
    try {
      const response = await axios.get(`/${table}/getAll`, {
        params: {
          limit,
          page,
        },
      });
      if (response.status !== 200) {
        alert(`Возникла ошибка ${response.status} - ${response.statusText}`);
        console.error(response.statusText);
        return {
          count: 0,
          rows: [],
        };
      }
      return response.data;
    } catch (e) {
      alert(
        'Возникла ошибка. Невозможно установить подключение с сервером. Необходимо перезапустить сервер. Подробнее в консоли',
      );
      console.error(e);
      return {
        count: 0,
        rows: [],
      };
    }
  },

  async addRow(table: string, data: any): Promise<Response> {
    try {
      const response = await axios.post(`/${table}/post`, {
        ...data,
      });
      console.log(response);
      if (response.status !== 200) {
        console.error(response.statusText);
        return {
          count: 0,
          rows: [],
        };
      }
      return {
        count: 1,
        rows: [response.data],
      };
    } catch (e) {
      console.error(e);
      return {
        count: 0,
        rows: [],
      };
    }
  },

  async deleteRow(table: string, id: number): Promise<Response> {
    try {
      const response = await axios.delete(`/${table}/delete`, {
        params: {
          id,
        },
      });
      console.log(response);
      if (response.status !== 200) {
        console.error(response.statusText);
        return {
          count: 0,
          rows: [],
        };
      }
      return {
        count: 1,
        rows: [response.data],
      };
    } catch (e) {
      console.error(e);
      return {
        count: 0,
        rows: [],
      };
    }
  },
};
