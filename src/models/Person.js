import Backbone from 'lib/backbone';
import PersonDeals from '../collections/PersonDeals';

class Person extends Backbone.Model {
  initialize() {
    this.set('deals', new PersonDeals(null, { dealId: this.get('id') }));
  }

  get idAttribute() {
    return 'id';
  }
}

export default Person;