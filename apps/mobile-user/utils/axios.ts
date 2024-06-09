import axios, { AxiosResponse, Method } from 'axios';
import Config from 'react-native-config'

export const fetchFromApi = async (method: Method | undefined, url: string, data?: any, token?: string): Promise<AxiosResponse> => {
    const headers: any = {};
    if (token) {
        // Add the JWT access token to the 'Authorization' header
        headers.Authorization = token;
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
