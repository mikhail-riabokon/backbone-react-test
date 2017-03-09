import Backbone from 'lib/backbone';
import Person from 'models/Person';

class Persons extends Backbone.Collection {
  get model() {
    return Person;
  }
  get url() {
    return '/persons';
  }
  parse(response) {
    return response.data;
  }
}

const persons = new Persons();

export default persons;
