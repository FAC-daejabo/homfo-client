import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import SideBar from '../../components/layout/sideBar';
import useUserStore from '../../../store/context/useUserStore';

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
