import React from 'react';

function App(props) {
  return (
    <div className="app">
      <div className="header">
        <h2>Header</h2>
      </div>
      <div>
        { props.children }
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
