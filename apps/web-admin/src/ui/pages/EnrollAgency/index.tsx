import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import SideBar from '../../components/layout/sideBar';
function EnrollAgency() {
    return (
        <div className={styles.container}>
            <SideBar/>
            <div className={styles.contents}>
                <div className = {styles.header}>
                    요청하기 관리 &rarr; 협력 공인중개사 정보 등록
                </div>
            </div>
        </div>
    );
}

export default EnrollAgency;
