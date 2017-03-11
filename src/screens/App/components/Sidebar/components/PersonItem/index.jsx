import React from 'react';
import Backbone from 'lib/backbone';

function PersonItem(props) {
  return (
    <h1 onClick={ () => { props.onClick(props.model.get('id')) } }>Person item</h1>
  );
}

PersonItem.propTypes = {
  model: React.PropTypes.instanceOf(Backbone.Model).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default PersonItem;
