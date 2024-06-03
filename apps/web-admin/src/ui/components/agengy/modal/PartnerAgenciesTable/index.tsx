import React, { useState, useEffect } from 'react';
import { Agency } from '../../../../../store/type/agency/type';
import styles from './styles.module.scss'
import usePartnerAgencyStore from '../../../../..//store/context/usePartenerAgencyStore';
const PartnerAgenciesTableData: React.FC<{data: Agency}> = ({data})=>{
  const { setAgencyInfo } = usePartnerAgencyStore();
  const selectPartnerAgency = (agency: Agency)=>{
    setAgencyInfo(agency);
  }
  return (
    <tr className={styles.row} onClick={()=>selectPartnerAgency(data)}>
      <td>{data.name}</td>
      <td>{data.openingRegistrationNumber}</td>
      <td>
      {data.officeCallNumber !== undefined ? data.officeCallNumber : ""}
      {data.officeCallNumber !== undefined && data.phoneNumber !== undefined ? "\n" : ""}
      {data.phoneNumber !== undefined ? data.phoneNumber : ""}
      </td>
      <td>업데이트 예정</td>
      <td>{data.agencyType}</td>
      <td>{data.roadAddress?.address} {data.roadAddressDetail}</td>
      <td>{data.chairmanName}</td>
      <td>{data.deduction ? "Y": "N"}</td>
      <td>
        {data.openedAt}
            {/* <button 
                className={styles.modifyButton}
                onClick={()=>console.log('hi')}
            >
                더보기
            </button> */}
        </td>
    </tr>)
}

export default PartnerAgenciesTableData;