import React from 'react';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';
import PersonDetails from './components/PersonDetails';
import PersonDeals from './components/PersonDeals';
import './index.css';

function Loading() {
  return (
    <p>...loading</p>
  );
}

function getPersonInfoLayout(personModel) {
  return (
    <div className="person-info">
      <div className="person-info__sections-title">
        <h1 className="person-details-title">{ personModel.get('name') }</h1>
        <h2 className="person-deals-title">Deals</h2>
      </div>

      <div className="person-info__sections">
        <PersonDetails personModel={ personModel } />
        <PersonDeals />
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

export default withCollection(PersonInfo, persons);
