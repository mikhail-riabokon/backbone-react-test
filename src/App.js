import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Header</h2>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
