import axios, { AxiosResponse, Method } from 'axios';
import Config from 'react-native-config'
import { getData } from './asyncStorage';

export const fetchFromApi = async (method: Method | undefined, url: string, data?: any, token?: string): Promise<AxiosResponse> => {
    const headers: any = {};
    const access_token = await getData("access-token");
    if (access_token !== null) {
        // Add the JWT access token to the 'Authorization' header
        headers.Authorization = access_token;
    }
    return axios({
        method,
        url: Config.APP_API_URL+ url,
        // url: SERVER_DEPLOY_URL  + url,
        data,
        headers,
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });
};
