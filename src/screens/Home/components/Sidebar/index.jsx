import React from 'react';
import { withRouter } from 'react-router';

function Sidebar(props) {
  const renderUser = (userModel) => {
    const userId = userModel.get('id');

    const onClick = () => {
      props.router.push(`/person/${userId}`);
    };

    return <h3 key={userId} onClick={onClick}>{userModel.get('name')}</h3>;
  };

  return (
    <div>
      <h2>Sidebar, users</h2>
      { props.users.map(renderUser) }
    </div>
  );
}

export default withRouter(Sidebar);
