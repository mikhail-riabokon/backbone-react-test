import Backbone from 'lib/backbone';
import PersonDeal from 'models/PersonDeal';

class PersonDeals extends Backbone.Collection {
  initialize(model, options) {
    this.dealId = options.dealId;
  }

  get model() {
    return PersonDeal;
  }

  url() {
    return `/persons/${this.dealId}/deals`;
  }

  parse(response) {
    return response.data;
  }
}

export default PersonDeals;
