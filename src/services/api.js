import axios from 'axios';

const api = axios.create({
  baseURL: 'https://timesheetapilinx.herokuapp.com',
});

export default api;
