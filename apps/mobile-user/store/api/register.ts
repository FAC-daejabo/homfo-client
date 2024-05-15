import { Alert } from "react-native";
import { UserFormData } from "../interface/userForm";
import { AxiosResponse } from "axios";
import { fetchFromApi } from "../../utils/axios";

export const registerUserInfo = async (formData: UserFormData, detailJob: string, phonenumber: string) => {
    try {
      let data;
      let marketingInfo = [
        {
          "code": "MARKETING_CODE_00000001",
          "isAgreement": false
        }];
      if (formData.job === "기타") {
        data = {...formData,  job: detailJob, phoneNumber: phonenumber, marketingCodeList:marketingInfo }
      } else{
        data = {...formData, phoneNumber: phonenumber, marketingCodeList:marketingInfo }
      } 
      console.log(data)
      const res: AxiosResponse = await fetchFromApi('POST',`/users/register`, data);
      return true;
    } catch (error: any) {
      Alert.alert(error.response.data.message)
      return false;
    }
};