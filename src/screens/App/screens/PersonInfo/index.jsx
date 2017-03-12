import React from 'react';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';
// import PersonDeals from './components/PersonDeals';
import './index.css';

function PersonInfo(props) {
  return (
    <div className="person-info">
      <div className="person-info__sections">
        <div className="person__details">
          <div className="detail">
            <div className="detail__key">Phone</div>
            <div className="detail__value">+111111111111</div>
          </div>
          <div className="detail">
            <div className="detail__key">Email</div>
            <div className="detail__value">+111111111111</div>
          </div>
          <div className="detail">
            <div className="detail__key">Added</div>
            <div className="detail__value">+111111111111</div>
          </div>
          <div className="detail">
            <div className="detail__key">Open deals</div>
            <div className="detail__value">+111111111111</div>
          </div>
          <div className="detail">
            <div className="detail__key">Next activity</div>
            <div className="detail__value">+111111111111</div>
          </div>
          <div className="detail">
            <div className="detail__key">Last activity</div>
            <div className="detail__value">+111111111111</div>
          </div>
        </div>
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
      </div>
    </div>
  );
}



// class PersonInfo extends React.Component {
//   render() {
//     const personId = parseInt(this.props.routeParams.id, 10);
//     const personModel = this.props.models.find((model) => model.get('id') === personId);
//
//     if (personModel) {
//       const Item = withCollection(PersonDeals, personModel.get('deals'));
//
//       return <Item />;
//     } else {
//       return <h4>Empty</h4>;
//     }
//   }
// }

export default withCollection(PersonInfo, persons);
