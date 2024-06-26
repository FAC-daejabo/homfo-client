import { Area } from "../../store/type/homfoRecommend&request/interface";
import { fetchFromApi } from '@homfo-client/util';
export const getAreaInfo= async (university_name:string,university_branch:string, setAreaInfo: React.Dispatch<React.SetStateAction<Area[] | undefined>>,areaId?:number): Promise<void> => {
    try {
      const res = await fetchFromApi('GET', `/transports/area?universityName=${university_name}&universityBranch=${university_branch}${areaId ? `&areaId=${areaId}` : ''}`);
      setAreaInfo(res.data.data);
    } catch (e) {
      console.log(e);
    }
};