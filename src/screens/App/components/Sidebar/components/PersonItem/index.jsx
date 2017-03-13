import React from 'react';
import Backbone from 'lib/backbone';
import './index.css';

const getPersonCompany = (companyName) => {
  return companyName
    ? <div className="person-item__company">{ companyName }</div>
    : null;
};

const getPersonItemClasses = (isSelected) => {
  let personItemClasses = 'person-item';

  if (isSelected) {
    personItemClasses += ' person-item--selected';
  }

  return personItemClasses;
};


function PersonItem(props) {
  const onClick = () => props.onClick(props.model.get('id'));

  return (
    <div className={ getPersonItemClasses(props.isSelected) } onClick={ onClick }>
      <div className="person-item__name">{ props.model.get('name') }</div>
      { getPersonCompany(props.model.get('org_name')) }
    </div>
  );
}

PersonItem.propTypes = {
  model: React.PropTypes.instanceOf(Backbone.Model).isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default PersonItem;
