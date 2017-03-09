import withCollection from 'helpers/withCollection';
import Sidebar from './components/Sidebar';
import persons from 'collections/persons';
import Backbone from 'lib/backbone';
import React from 'react';

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <Sidebar users={props.models} />
    </div>
  );
}

Home.propTypes = {
  models: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(Backbone.Model)
  ).isRequired,
};

export default withCollection(Home, persons);
