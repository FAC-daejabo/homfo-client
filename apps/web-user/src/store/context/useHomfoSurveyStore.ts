import {create} from 'zustand';
import { HomfoEditData, HomfoStoreState, Result,ResultDetail } from '../type/homfoRecommend&request/interface';

import { getAreaDetailResult } from '../../services/homfoArea/api';
import { fetchFromApi } from '@homfo-client/util';
const useHomfoSurveyStore = create<HomfoStoreState>((set)=>({
    result: null,
    resultDetail:null,

    setResult: (data:Result[])=> set((state) => (
      { ...state, result: data })),

    setResultDetail: (data:ResultDetail[])=> set((state) => (
    { ...state, resultDetail: data })),

    reset: () => set((state)=>({
      result: null,
      resultDetail:null
    })),

    postHomfoRecommendInfo: async (id: number, data:HomfoEditData, filterData: {[key:string]:number[]}|undefined): Promise<void> => {
      try {
        let totalData={};
        totalData = Object.keys(data).reduce((obj:any, index:any)=>{
          if (data[index].length === 1 && index!=='facilities') {
            obj[index] = data[index][0]; 
          } else {
            obj[index] = data[index];
          }
          return obj;
        },{})
        if (filterData !== undefined) {
          const transportsData = Object.entries(filterData).map(([type, [start, end]]) => ({
            type,
            seconds: end * 60,
          }));
          totalData = {...totalData, "transports": transportsData}
        }
        const storeState = useHomfoSurveyStore.getState();
        if (storeState.result !== null){
          storeState.reset();
        }
        const res = await fetchFromApi("POST", `/users/${id}/recommended-area`,totalData);
        storeState.setResult(res.data.data);
        const resultArray:ResultDetail[] = await Promise.all(
          res.data.data.map(async (item: any) => {
            const areaId: number = item.area.areaId;
            const detail = await getAreaDetailResult(areaId);
            return {
              areaId,
              detail
            };
          })
        );
       storeState.setResultDetail(resultArray);
        } catch (e: any) {
          console.log('error')
          console.log(e);
        }
    },
 }))     


 export default useHomfoSurveyStore;