import Backbone from 'lib/backbone';
import PersonDeals from '../collections/PersonDeals';

class Person extends Backbone.Model {
  initialize() {
    this.set('deals', new PersonDeals(null, { dealId: 1 }));
  }

  get idAttribute() {
    return 'id';
  }
}

export default Person;
