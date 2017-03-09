import React from 'react';

export default function withCollection(WrappedComponent, collection) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        models: [],
      };

      collection.on('add', this.onModelsAdded, this);
    }

    onModelsAdded() {
      this.setState({ models: collection.models });
    }

    componentDidMount() {
      // TODO: add logic to check is was fetched before
      collection.fetch();
    }

    componentWillUnmount() {
      collection.off('add', this.onModelsAdded, this);
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          collection={collection}
          models={this.state.models}
        />
      );
    }
  }
}
