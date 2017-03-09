import withCollection from 'helpers/withCollection';
import Sidebar from './components/Sidebar';
import persons from 'collections/persons';
import Backbone from 'lib/backbone';
import React from 'react';

function App(props) {
  return (
    <div className="app">
      <div className="header">
        <h2>Header</h2>
      </div>
      <Sidebar personsModels={props.models} />
      <div>
        { props.children }
      </div>
    </div>
  );
}

App.propTypes = {
  models: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(Backbone.Model)
  ).isRequired,
};

export default withCollection(App, persons);
