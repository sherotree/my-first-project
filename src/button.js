import React from 'react';
import { Button } from 'antd';
import './button.css';

const MyButton = () => {
    return (
    <div className='buttons'>
        <Button type='primary' className='first-button'>点这里</Button>
        <Button>再点这里</Button>
    </div>)
}

export default MyButton;