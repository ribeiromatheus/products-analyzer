import axios from 'axios';

import credentials from '../credentials/baseUrl';

const api = axios.create({ baseURL: credentials.ip });

export default api;