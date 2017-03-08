import React from 'react';
import Sidebar from './components/Sidebar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
