import { fetchFromApi } from "@homfo-client/util";
import { Agency, ITotalAgency } from "@web-admin/store/type/agency/type";
interface AgencyParams {
    page: number;
    size: number;
    sort: string[];
    needCount: boolean;
}

export const createAgencies = async () => {
    try {
      const res = await fetchFromApi("POST",'/agencies/create/fromPublicData');  
      console.log(res.data);  
    } catch (error: unknown) {
      console.log(error);
    }   
}  
export const getPartnerAgencies = async (params: AgencyParams,setPartnerAgencies:React.Dispatch<React.SetStateAction<Agency[]|undefined>>, setTotalPartnerAgencies: React.Dispatch<React.SetStateAction<ITotalAgency | undefined>>) => {
    try {

      const res = await fetchFromApi("GET",'/agencies/search/pages', undefined, params);  
      setPartnerAgencies(res.data.data);  
      setTotalPartnerAgencies(res.data);
    } catch (error: unknown) {
      console.log(error);
    }   
}  
  