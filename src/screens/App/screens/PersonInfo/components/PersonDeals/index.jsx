import React from 'react';

// function renderDeal(dealModel) {
//   return (
//     <div key={dealModel.get('id')}>
//       <span>{dealModel.get('title')}</span>
//       <span>{dealModel.get('value')}</span>
//     </div>
//   );
// }

function PersonDeals(props) {
  return (
    <div className="person-deals">
      <div className="person-deal">
        <div className="company">Title</div>
        <div className="revenue">Sum</div>
      </div>
      <div className="person-deal">
        <div className="company">Test</div>
        <div className="revenue">100<span className="currency">$</span></div>
      </div>
      <div className="person-deal">
        <div className="company">Test</div>
        <div className="revenue">100<span className="currency">$</span></div>
      </div>
      <div className="person-deal">
        <div className="company">Test</div>
        <div className="revenue">100<span className="currency">$</span></div>
      </div>
      <div className="person-deal">
        <div className="company">Test</div>
        <div className="revenue">100<span className="currency">$</span></div>
      </div>
    </div>
  );
}

export default PersonDeals;
