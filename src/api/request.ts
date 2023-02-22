import { Response } from '../types/Types';
import axios from './helpers/axios';

export default {
  async getAllRows(table: string): Promise<Response> {
    const response = await axios.get(`/${table}/getAll`);
    return response.data;
  },
};
