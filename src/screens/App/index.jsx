import Sidebar from './components/Sidebar';
import React from 'react';

function App(props) {
  return (
    <div className="app">
      <div className="header">
        <h2>Header</h2>
      </div>
      <Sidebar />
      <div>
        { props.children }
      </div>
    </div>
  );
}

export default App;
