import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return <>
    <h1>我是 Home 页面</h1>
    <Link to="/foo">去 Foo</Link>
    </>
}

export default Home;