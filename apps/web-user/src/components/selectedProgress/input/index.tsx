import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styles from './styles.module.scss'
import { RequestData } from '../../../store/type/homfoRecommend&request/interface';
import { ExtendedRequestData } from '../../../store/type/requestBox/interface';
interface AdditionalInputProps{
    data: RequestData|ExtendedRequestData;
    setData:Dispatch<SetStateAction<RequestData>>|Dispatch<SetStateAction<ExtendedRequestData>>;
    objectKey: string;
}
const AdditionalInput = ({data, setData, objectKey}:AdditionalInputProps)=>{
    return(<>
          <input 
            type="text"
            maxLength={200}
            value={data[objectKey]} 
            onChange={(e)=>setData((prev:any)=>({...prev, [objectKey]: e.target.value}))} 
            className={objectKey==="otherRoomOption"?styles.additionalFacilities:styles.additionalRequests}
            placeholder={`추가 요청사항을 입력해주세요 (최대 ${objectKey==="additionalRequests"?50:200}자)`}/>
    </>);
}
export default AdditionalInput