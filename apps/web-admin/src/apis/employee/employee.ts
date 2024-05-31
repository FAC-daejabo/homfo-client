import { fetchFromApi } from '@homfo-client/util'
import { ITotalEmployee, employee } from '../../store/type/employee/type';

interface employeeParams {
  page : number;
  size :number;
  sort?:string[];
  needCount: boolean;
  searchName?: string;
  employeeStatus?: string;
}

export const getEmployeesInfo = async (params: employeeParams, setEmployeeData: React.Dispatch<React.SetStateAction<employee[] | undefined>>, setTotalData: React.Dispatch<React.SetStateAction<ITotalEmployee | undefined>>) => {
    try {
      const res = await fetchFromApi("GET","/employees/infos/search/pages",
      undefined, params   
       );    
       console.log(params)
      console.log(res.data)
      setTotalData(res.data)
      setEmployeeData(res.data.data)
    } catch (error: unknown) {
      console.log(error);
    }   
}  

export const approveEmployee = async (targetId: number) => {
  try {
    const res = await fetchFromApi("PATCH",`/employees/register/approve/${targetId}`);    
    if(res.status === 200){
      return true;
    }
  } catch (error: unknown) {
    console.log(error);
    return false;
  }   
}  

export const stopEmployee = async (targetId: number) => {
  try {
    const res = await fetchFromApi("PATCH",`/employees/accounts/stop/${targetId}`);    
    if(res.status === 200){
      return true;
    }
  } catch (error: unknown) {
    console.log(error);
    return false;
  }   
}  

export const unstopEmployee = async (targetId: number) => {
  try {
    const res = await fetchFromApi("PATCH",`/employees/accounts/unstop/${targetId}`);    
    if(res.status === 200){
      console.log("정지 해제")
      return true;
    }
  } catch (error: unknown) {
    console.log(error);
    return false;
  }   
}  