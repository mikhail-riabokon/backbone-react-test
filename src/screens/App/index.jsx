import Sidebar from './components/Sidebar';
import Header from './components/Header';
import React from 'react';
import './index.css';

function App(props) {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="route-wrapper">
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default App;
