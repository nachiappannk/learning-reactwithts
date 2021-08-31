import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EEdit <code>src/App.tsx</code> and save to reload.
          <MainApp></MainApp>
        </p>
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
