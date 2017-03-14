import React from 'react';

export default function withModel(WrappedComponent, model) {
  return class WithModelWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        model: model
      };

      this.onModelSynced = this.onModelSynced.bind(this);
    }

    onModelSynced(syncedModel) {
      this.setState({ model: syncedModel });
    }

    componentDidMount() {
      model.once('sync', this.onModelSynced);
      model.fetch();
    }

    render() {
      return <WrappedComponent model={this.state.model} />
    }
  };
}
