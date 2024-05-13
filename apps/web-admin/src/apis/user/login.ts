import { fetchFromApi } from '@homfo-client/util'

export const signIn = async (id: string, password: string) => {
    try {
      const body = {
        account: id,
        password: password,
      }
      const res = await fetchFromApi('POST',`/users/sign-in`, body);
      console.log(res);
      
    } catch (error: unknown) {
      console.log(error);
    }   
}  
