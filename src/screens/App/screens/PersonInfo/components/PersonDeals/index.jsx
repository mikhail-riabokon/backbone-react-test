import React from 'react';

function renderDeal(dealModel) {
  return (
    <div key={dealModel.get('id')}>
      <span>{dealModel.get('title')}</span>
      <span>{dealModel.get('value')}</span>
    </div>
  );
}

function PersonDeals(props) {
  return (
    <div>
      <h4>Deals</h4>
      <div>{ props.models.map(renderDeal) }</div>
    </div>
  )
}

export default PersonDeals;
