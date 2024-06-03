import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import SideBar from '../../components/layout/sideBar';
import EnrollForm from './enrollForm';
import LoadingModal from '../../components/agengy/modal';
import usePartnerAgencyStore from '../../../store/context/usePartenerAgencyStore';
function EnrollRealtor() {
    const { agencyInfo } = usePartnerAgencyStore();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    useEffect(()=>{
        setModalOpen(false);
    },[agencyInfo])
    return (
        <div className={styles.container}>
            <SideBar/>
            
            <div className={styles.contents}>
                <div className = {styles.header}>
                    <div>협력 공인중개사 관리 &rarr; 협력 공인중개사 정보 등록</div>
                    <button
                        className={styles.loadButton}
                        onClick = {()=>setModalOpen(true)}
                    >
                        불러오기
                    </button>
                </div>
                <EnrollForm/>
                <LoadingModal open={modalOpen} setOpen={setModalOpen}/>
            </div>
        </div>
    );
}

export default EnrollRealtor;
