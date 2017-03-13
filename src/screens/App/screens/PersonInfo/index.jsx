import React from 'react';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';
import PersonDetails from './components/PersonDetails';
import PersonDeals from './components/PersonDeals';
import PersonModel from 'models/Person';
import Loading from './components/Loading';
import './index.css';

function getPersonInfoLayout(personModel) {
  const Deals = withCollection(PersonDeals, personModel.get('deals'));

  return (
    <div className="person-info">
      <div className="person-info__sections-title">
        <h1 className="person-details-title">{ personModel.get('name') }</h1>
        <h2 className="person-deals-title">Deals</h2>
      </div>
      <div className="person-info__sections">
        <PersonDetails personModel={ personModel } />
        <Deals />
      </div>
    </div>
  );
}

function PersonInfo(props) {
  const personId = parseInt(props.router.params.id, 10);
  const personModel = props.models.find((model) => model.get('id') === personId);

  return personModel
    ? getPersonInfoLayout(personModel)
    : <Loading />;
}

PersonInfo.propTypes = {
  router: React.PropTypes.shape({
    params: React.PropTypes.shape({
      id: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
  models: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(PersonModel)
  ).isRequired,
};

export default withCollection(PersonInfo, persons);
