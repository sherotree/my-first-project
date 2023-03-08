import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, ConfigProvider } from 'antd';
import MyButton from './button';
import MyButton2 from './my-button2';
import { Routes, Route } from 'react-router-dom';
import Home from './view/home';
import Foo from './view/foo';
import 'antd/dist/reset.css';

function App() {
  return (
    <ConfigProvider theme={{token: {
      colorPrimary: '#00b96b'
    }}}>
      <div className="App">
        <header className="App-header">
          <span>现在的环境： {process.env.NODE_ENV}</span>
          <MyButton2 />
          <img src={logo} className="App-logo" alt="logo" />
          <Button type="primary">按钮</Button>
          <MyButton />
          <div className='text-3xl font-bold red'>tailwind</div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <img src={process.env.PUBLIC_URL + 'favicon.ico'} alt='logo'></img>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='foo' element={<Foo />}/>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
