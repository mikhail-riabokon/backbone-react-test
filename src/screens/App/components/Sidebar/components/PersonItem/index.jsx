import React from 'react';
import Backbone from 'lib/backbone';

function PersonItem(props) {
  const onClick = () => props.onClick(props.model.get('id'));

  return (
    <div className="person-item" onClick={onClick}>
      <div className="person-item__name">Mikhail Riabokon</div>
      <div className="person-item__company">test</div>
    </div>
  );
}

PersonItem.propTypes = {
  model: React.PropTypes.instanceOf(Backbone.Model).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default PersonItem;
