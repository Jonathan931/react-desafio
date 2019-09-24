import axios from 'axios';

const api = axios.create({
  baseURL:  "https://testapi.io/api/"
});

export default api;
  