import { Alert } from "react-native";
import { fetchFromApi } from "../../utils/axios";
import { storeData, getData } from "../../utils/asyncStorage";
import axios from "axios";
import Config from 'react-native-config'
export const signIn = async (id: string, password: string) => {
    try {
      let body = {
        account: id,
        password: password
      }
      const res = await fetchFromApi('POST',`/users/sign-in`, body);

      storeData("access-token",res.data.accessToken);
      storeData("refresh-token",res.data.refreshToken);
      return true;

    } catch (error: any) {
      Alert.alert("아이디, 비밀번호를 확인 해주세요");

      return false;

    }   
}

export const getTokenExpiredInfo = async () => {
  try {
    const access_token = await getData("access-token");
    const refresh_token = await getData("refresh-token");
    const config = {
      headers: {
        'Authorization': `Bearer ${ access_token }`,
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.patch(`${Config.APP_API_URL}/users/refresh`,{token: refresh_token}, config);
    storeData("access-token",res.data.accessToken); 
    return "Home";
  } catch (error: any) {
    console.log(error);
    if (error.response.status === 401 || error.response.status === 400 || error.response.status === 403){
      return "로그인";
    }
  }   
}  
