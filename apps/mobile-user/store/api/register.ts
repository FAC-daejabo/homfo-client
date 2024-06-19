import { Alert } from "react-native";
import { UserFormData } from "../interface/userForm";
import { AxiosResponse } from "axios";
import { fetchFromApi } from "../../utils/axios";
import { storeData } from "../../utils/asyncStorage";

export const registerUserInfo = async (formData: UserFormData, detailJob: string, phonenumber: string, marketingAgreement: boolean) => {
    try {
      let data;
      let marketingInfo = [
        {
          "code": "MARKETING_CODE_00000001",
          "isAgreement": marketingAgreement,
        }];
      if (formData.job === "기타") {
        data = {...formData,  job: detailJob, phoneNumber: phonenumber, marketingCodeList:marketingInfo }
      } else{
        data = {...formData, phoneNumber: phonenumber, marketingCodeList:marketingInfo }
      } 
      const res: AxiosResponse = await fetchFromApi('POST',`/users/register`, data);
      storeData("access-token",res.data.accessToken);
      storeData("refresh-token",res.data.refreshToken);
      return true;
    } catch (error: any) {
      Alert.alert(error.response.data.message)
      return false;
    }
};