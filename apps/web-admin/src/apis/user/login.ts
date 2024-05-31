import { EXPIRED_TIME, fetchFromApi } from '@homfo-client/util'
import { setCookie, removeCookie} from '@homfo-client/util';
import moment from "moment";

export const signIn = async (id: string, password: string) => {
    try {
      const body = {
        account: id,
        password: password,
      }
      const res = await fetchFromApi("POST","/employees/sign-in", body);
      console.log(res.data)
      localStorage.setItem('access-token',res.data.accessToken);
      setCookie("refresh-token", res.data.refreshToken, {path: '/'});
      localStorage.setItem("expired-at", moment().add(EXPIRED_TIME, "minute").format("yyyy-MM-DD HH:mm:ss"))
      return true;
    } catch (error: unknown) {
      console.log(error);
      return false;
    }   
}  


export const signOut = async () => {
  try {
    const res = await fetchFromApi("PATCH","/employees/sign-out");
    if(res.status === 200){
      localStorage.removeItem('access-token');
      removeCookie("refresh-token");
      localStorage.setItem("expired-at", moment().add(EXPIRED_TIME, "minute").format("yyyy-MM-DD HH:mm:ss"))
    }
    alert("로그아웃 되었습니다.")
    return true;
  } catch (error: unknown) {
    console.log(error);
    return false;
  }   
}  

export const withdrawal = async () => {
  try {
    const res = await fetchFromApi("DELETE","/employees/accounts");
    if(res.status === 200){
      localStorage.removeItem('access-token');
      removeCookie("refresh-token");
      localStorage.setItem("expired-at", moment().add(EXPIRED_TIME, "minute").format("yyyy-MM-DD HH:mm:ss"))
    }
    alert("회원이 탈퇴 되었습니다.")
    return true;
  } catch (error: unknown) {
    console.log(error);
    return false;
  }   
}  
