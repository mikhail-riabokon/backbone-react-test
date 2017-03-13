import React from 'react';
import { withRouter } from 'react-router';
import withCollection from 'helpers/withCollection';
import persons from 'collections/persons';
import PersonItem from './components/PersonItem';
import PersonModel from 'models/Person';
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
    this.onHistoryChanged = this.onHistoryChanged.bind(this);
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

  onHistoryChanged() {
    if (!this.props.router.params.id) {
      this.setState({ selectedId: null });
    }
  }

  componentDidMount() {
    this.unlisten = this.props.router.listen(this.onHistoryChanged);
  }

  componentWillUnMount() {
    this.unlisten();
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
    React.PropTypes.instanceOf(PersonModel)
  ).isRequired,
};

export default withCollection(withRouter(Sidebar), persons);
