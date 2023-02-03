import axios from './helpers/axios';

export default {
  async getAllRows(table: string): Promise<[]> {
    const response = await axios.get(`/${table}/getAll`);
    return response.data;
  },
};
