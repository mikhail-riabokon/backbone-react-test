import React from 'react';

export default function withCollection(WrappedComponent, collection) {
  return class WithCollectionWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        models: collection.models,
      };

      this.onModelsAdded = this.onModelsAdded.bind(this);
    }

    onModelsAdded() {
      this.setState({ models: collection.models });
    }

    componentDidMount() {
      collection.once({
        request: function () {
          this.fetching = true;
        },
        'sync error': function () {
          this.fetching = false;
        },
        sync: this.onModelsAdded,
      });

      if (!collection.fetching) {
        collection.fetch();
      }
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
