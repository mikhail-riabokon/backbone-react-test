import Sidebar from './components/Sidebar';
import Header from './components/Header';
import React from 'react';
import './index.css';

function App(props) {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div>
        { props.children }
      </div>
    </div>
  );
}

export default App;
