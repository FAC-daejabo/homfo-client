import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import SideBar from '../../components/layout/sideBar';
import ApprovalEmployeeTable from './approvalEmployeeTable';
import InquiryEmployeeTable from './inquiryEmployeeTable';
function Employee() {
    return (
        <div className={styles.container}>
            <SideBar/>
            <div className={styles.contents}>
                <div className = {styles.header}>
                    회원관리 &rarr; 관리자 직원 조회
                </div>
                <ApprovalEmployeeTable/>
                <InquiryEmployeeTable/>
            </div>
        </div>
    );
}

export default Employee;
