import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import useUserStore from '../../../store/context/useUserStore';
import SideBar from '../../components/layout/SideBar';

function Home() {
    const { fetchUserInfo } = useUserStore();
    useEffect(()=>{
        fetchUserInfo();
    },[])
    
    return (
        <div className={styles.container}>
            <SideBar/>
        </div>
    );
}

export default Home;
