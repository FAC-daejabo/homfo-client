import axios, { Method, AxiosResponse } from 'axios'
import { getCookie } from './cookie';
import moment from "moment";
import qs from 'qs';

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: 'comma' })
}

export const EXPIRED_TIME = 1;

const SERVER_DEPLOY_URL = 'https://dev-server.homfo.co.kr/api';
// const SERVER_PRODUCTION_URL = 'https://prod-server.homfo.co.kr/api';

const axiosInstance = axios.create({
  baseURL: SERVER_DEPLOY_URL 
});


const getNewToken = async () => {
  try {
    const access_token = localStorage.getItem("access-token");
    const refresh_token = getCookie("refresh-token")
    const config = {
      headers: {
        'Authorization': `Bearer ${ access_token }`,
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.patch(`${SERVER_DEPLOY_URL}/users/refreshes`,  {token: refresh_token}, config);
    localStorage.setItem("access-token",res.data.accessToken); 
    localStorage.setItem("expired-at", moment().add(EXPIRED_TIME, "minute").format("yyyy-MM-DD HH:mm:ss"))

    return res.data.accessToken;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 400){
      window.location.href = '/login'; 
    }
    console.log(error);
  }   
}  



axios.interceptors.request.use(
  async (config: any) => {
    try {
      const access_token = localStorage.getItem("access-token");
      // const expired_at = localStorage.getItem("expired-at");
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
      // if (moment(expired_at).diff(moment()) < 0 ){
      //   const access_token = await getNewToken();
      //   if (access_token) {
      //     config.headers.Authorization = `Bearer ${access_token}`;
      //   }
      // } 
      return config;  
    } catch (err) {
      console.error("[_axios.interceptors.request] config : " + err);
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {     
      const originalRequest = error.config;
      if (error.response && error.response.status === 403){     
        // 이후 기존에 에러났던 API 다시 실행해주어야함 
        const access_token = await getNewToken();
        if (access_token) {
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return axiosInstance(originalRequest); 
        }
      }
      return Promise.reject(error);
  }
);

export const fetchFromApi = async (
    method: Method | undefined,
    url: string,
    data?: any,
    params?: any,
  ): Promise<any> => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios({
        method,
        url:  SERVER_DEPLOY_URL+url,
        data,
        params
      });
      return (response);
    } catch (err) {
      throw err;
    }
};


