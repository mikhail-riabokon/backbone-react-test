import React from 'react';
import Backbone from 'lib/backbone';
import './index.css';

function PersonItem(props) {
  const onClick = () => props.onClick(props.model.get('id'));
  let personItemClasses = 'person-item';

  if (props.isSelected) {
    personItemClasses += ' person-item--selected';
  }

  return (
    <div className={personItemClasses} onClick={onClick}>
      <div className="person-item__name">Mikhail Riabokon</div>
      <div className="person-item__company">test</div>
    </div>
  );
}

PersonItem.propTypes = {
  model: React.PropTypes.instanceOf(Backbone.Model).isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default PersonItem;
