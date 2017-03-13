import React from 'react';
import Backbone from 'lib/backbone';
import { withRouter } from 'react-router';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';
import PersonItem from './components/PersonItem';
import './index.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    const selectedPersonId = props.router.params.id && parseInt(props.router.params.id, 10);

    this.state = {
      selectedId: selectedPersonId || null,
    };

    this.renderPersonItem = this.renderPersonItem.bind(this);
    this.onPersonClicked = this.onPersonClicked.bind(this);
  }

  onPersonClicked(personId) {
    this.setState({ selectedId: personId }, () => {
      this.props.router.push(`/person/${personId}`);
    });
  }

  renderPersonItem(personModel, index) {
    return (
      <PersonItem
        key={index}
        model={personModel}
        onClick={this.onPersonClicked}
        isSelected={personModel.get('id') === this.state.selectedId}
      />
    );
  }

  render() {
    return (
      <div className="sidebar">
        { this.props.models.map(this.renderPersonItem) }
      </div>
    );
  }
}

Sidebar.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      id: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
  models: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(Backbone.Model)
  ).isRequired,
};

export default withCollection(withRouter(Sidebar), persons);
