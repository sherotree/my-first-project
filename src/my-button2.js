import React from 'react';
import { Button } from 'antd';
import styles from './my-button2.module.css';

const MyButton2 = () => {
    return (
    <div className={styles.buttons}>
        <Button type='primary' className={styles['first-button']}>点这里看看瞧瞧</Button>
        <Button>再点这里再look</Button>
    </div>)
}

export default MyButton2;