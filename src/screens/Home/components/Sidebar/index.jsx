import React from 'react';

const renderUser = (userModel) => {
  return <h3 key={userModel.cid}>{userModel.get('name')}</h3>;
};

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>Sidebar, users</h2>
        { this.props.users.map(renderUser) }
      </div>
    );
  }
}

export default Sidebar;
