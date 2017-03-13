import Backbone from 'lib/backbone';

class PersonActivity extends Backbone.Model {
  get idAttribute() {
    return 'id';
  }
}

export default PersonActivity;
