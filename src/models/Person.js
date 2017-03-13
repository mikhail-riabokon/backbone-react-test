import Backbone from 'lib/backbone';
import PersonDeals from '../collections/PersonDeals';
import PersonActivities from '../collections/PersonActivities';

class Person extends Backbone.Model {
  initialize() {
    this.set('deals', new PersonDeals(null, { dealId: this.get('id') }));

    let activities = [this.get('next_activity_id'), this.get('last_activity_id')];
    activities = activities.filter((activity) => activity);

    this.set('activities', new PersonActivities(null, { activities }));
  }

  get idAttribute() {
    return 'id';
  }
}

export default Person;
