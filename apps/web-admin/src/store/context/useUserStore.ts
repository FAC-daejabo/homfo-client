import { create } from 'zustand';
import { fetchFromApi } from '@homfo-client/util';
import { IEmployee } from '../type/employee/type';

interface UserStoreState {
    userInfo: IEmployee;
    setUserInfo: (user: IEmployee) => void;
    fetchUserInfo: () => Promise<void>;
    // modify: (id: number, newData: Partial<PersonalInfo>) => Promise<boolean>;
}

 const useUserStore = create<UserStoreState>((set) => ({
    userInfo: {
        employee: {
          account: "",
          birthday: "",
          gender: "",
          id: 0,
          job: "",
          nickname: "",
          phoneNumber: "",
          role: "",
          status: "U"
        },
        marketingAgreementList: []
        },
  setUserInfo: (info: IEmployee) => {
    set({ userInfo: info });
  },
  fetchUserInfo: async (): Promise<void> => {
    try {
        const res = await fetchFromApi("GET","/employees/infos");
        if(res.status === 200){
            console.log(res.data)
            set({ userInfo: res.data});
        }
    } catch (e) {
      console.log(e);
    }
  },
//   modify: async (id: number, newData: Partial<PersonalInfo>): Promise<boolean> => {
//     try {
//       const res = await fetchFromApi('PATCH',`/users/${id}/info`, newData);
//       set({ userInfo: res.data});
//       return true;
//     } catch (e: any) {
//       return false;
//     }
//   },
}));
export default useUserStore;
