import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { getPartnerRealtorsList } from '../../../apis/realtor/realtor';
import SideBar from '../../components/layout/SideBar';
function PartnerRealtorList() {
    useEffect(()=>{
        getPartnerRealtorsList();
    },[])
    return (
        <div className={styles.container}>
            <SideBar/>
            <div className={styles.contents}>
                <div className = {styles.header}>
                    협력 공인중개사 관리 &rarr; 협력 공인중개사 목록
                </div>
            </div>
        </div>
    );
}

export default PartnerRealtorList;
