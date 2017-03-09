import React from 'react';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';
import PersonDeals from './components/PersonDeals';

class PersonInfo extends React.Component {
  render() {
    const personId = parseInt(this.props.routeParams.id, 10);
    const personModel = this.props.models.find((model) => model.get('id') === personId);

    if (personModel) {
      const Item = withCollection(PersonDeals, personModel.get('deals'));

      return <Item />;
    } else {
      return <h4>Empty</h4>;
    }
  }
}

export default withCollection(PersonInfo, persons);
