import Backbone from 'lib/backbone';

export class AdminUser extends Backbone.Model {
  get urlRoot() {
    return '/users';
  }

  get idAttribute() {
    return 'id';
  }

  parse(response) {
    this.adminCompanyId = response.additional_data.company_id;

    return response.data.find((model) => model.is_admin);
  }
}

const adminUser = new AdminUser();

export default adminUser;
