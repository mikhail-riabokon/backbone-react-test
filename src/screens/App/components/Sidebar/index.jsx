import React from 'react';
import Backbone from 'lib/backbone';
import { withRouter } from 'react-router';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';

function Sidebar(props) {
  const renderUser = (personModel) => {
    const userId = personModel.get('id');

    const onClick = () => {
      props.router.push(`/person/${userId}`);
    };

    return <h3 key={userId} onClick={onClick}>{personModel.get('name')}</h3>;
  };

  return (
    <div>
      <h2>Sidebar, users</h2>
      { props.models.map(renderUser) }
    </div>
  );
}

Sidebar.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired,
  models: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(Backbone.Model)
  ).isRequired,
};

export default withCollection(withRouter(Sidebar), persons);
