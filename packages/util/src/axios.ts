import axios, { Method } from 'axios';
const SERVER_DEPLOY_URL = 'https://dev-server.homfo.co.kr/api';
const SERVER_PRODUCTION_URL = 'https://prod-server.homfo.co.kr/api';

axios.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    } catch (err) {

      console.error("[_axios.interceptors.request] config : " + err);
    }
    return config;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);


export const fetchFromApi = async (
    method: Method | undefined,
    url: string,
    data?: any,
  ): Promise<any> => {
    try {
      const response = await axios({
        method,
        // url: SERVER_PRODUCTION_URL + url,    
        url: SERVER_DEPLOY_URL + url,
        data,
      });
      return (response);
    } catch (err) {
      throw err;
    }
};



