import React from 'react';

function PersonDeal({ title, value }) {
  return (
    <div className="person-deal">
      <div className="company">{ title }</div>
      <div className="revenue">{ value }<span className="currency">$</span></div>
    </div>
  );
}

PersonDeal.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.number,
};

export default PersonDeal;
