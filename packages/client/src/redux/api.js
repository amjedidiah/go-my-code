// axiosconfig.js
import axios from 'axios';

// configure base url
const api = axios.create({
  baseURL:
    process.env[
      process.env.NODE_ENV === 'production' ?
        'REACT_APP_API_BASE_URL_PROD' :
        'REACT_APP_API_BASE_URL_DEV'
    ],
  timeout: 30000,
});

// Export API object
export default api;
