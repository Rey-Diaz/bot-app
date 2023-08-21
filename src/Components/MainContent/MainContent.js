import React from 'react';
import styles from './MainContent.module.css';
import { Outlet } from 'react-router-dom';

function MainContent() {
    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    );
}

export default MainContent;
