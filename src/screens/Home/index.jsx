import withCollection from 'helpers/withCollection';
import Sidebar from './components/Sidebar';
import users from 'collections/users';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Sidebar users={this.props.models} />
      </div>
    );
  }
}

export default withCollection(Home, users);
