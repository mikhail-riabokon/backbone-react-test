import Backbone from 'lib/backbone';

export class AdminUser extends Backbone.Model {
  get urlRoot() {
    return '/users/self';
  }

  get idAttribute() {
    return 'id';
  }

  parse(response) {
    return response.data;
  }
}

const adminUser = new AdminUser();

export default adminUser;
