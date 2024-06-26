import { Alert } from "react-native";
import { fetchFromApi } from "../../utils/axios";
import { UserInfo } from "../interface/login";
import { storeData } from "../../utils/asyncStorage";

export const fetchUserInfo = async (tokenValue: string, setUserInfo:(newUser: UserInfo) => void) => {
  try {
    const res = await fetchFromApi('GET',`/users/info`, null, tokenValue); 
    setUserInfo({...res.data,token:tokenValue});
    console.log(res.data)
    return true;
  } catch (error: any) {
    return false;
  }
}

export const signIn = async (id: string, password: string, setUserInfo:(newUser: UserInfo) => void) => {
    try {
      let body = {
        account: id,
        password: password
      }
      const res = await fetchFromApi('POST',`/users/sign-in`, body);
      console.log(res.data)
      // fetchUserInfo(res.headers.authorization, setUserInfo);
      
      return true;
    } catch (error: any) {
      Alert.alert("아이디, 비밀번호를 확인 해주세요");
      return false;
    }   
}
