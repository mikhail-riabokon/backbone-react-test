import Backbone from 'lib/backbone';
import User from 'models/User';

class Users extends Backbone.Collection {
  get model() {
    return User;
  }
  get url() {
    return '/users';
  }
  parse(response) {
    return response.data;
  }
}

const users = new Users();

export default users;
