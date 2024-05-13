import React from 'react';
import styles from './styles.module.scss';
import SideBar from '../../components/layout/SideBar';

function Home() {
    return (
        <div className={styles.container}>
            <SideBar/>
        </div>
    );
}

export default Home;
