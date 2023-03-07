import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'antd';
import MyButton from './button';
import MyButton2 from './my-button2';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton2 />
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">按钮</Button>
        <MyButton />
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
    </div>
  );
}

export default App;
