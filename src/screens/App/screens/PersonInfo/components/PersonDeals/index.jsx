import React from 'react';
import PersonDeal from './components/PersonDeal';
import PersonDealModel from 'models/PersonDeal';
import './index.css';

const getDeal = (dealModel, index) => {
  return (
    <PersonDeal
      key={index}
      title={dealModel.get('title')}
      value={dealModel.get('value')}
    />
  );
};

function PersonDeals(props) {
  return (
    <div className="person-deals">
      <div className="person-deal">
        <div className="company">Title</div>
        <div className="revenue">Sum</div>
      </div>
      { props.models.map(getDeal) }
    </div>
  );
}

PersonDeals.propTypes = {
  models: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(PersonDealModel)
  ).isRequired,
};


export default PersonDeals;
