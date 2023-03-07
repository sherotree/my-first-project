import React from 'react';
import { Link } from 'react-router-dom';

const Foo = () => {
    return <>
    <h1>我是 Foo 页面</h1>
    <Link to="/">去 Home</Link>
    </>
}

export default Foo;