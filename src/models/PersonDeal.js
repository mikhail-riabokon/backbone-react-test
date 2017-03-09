import Backbone from 'lib/backbone';

class PersonDeal extends Backbone.Model {
  get idAttribute() {
    return 'id';
  }
}

export default PersonDeal;
