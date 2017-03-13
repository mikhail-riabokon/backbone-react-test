import Backbone from 'lib/backbone';
import PersonActivity from 'models/PersonActivity';

class PersonActivities extends Backbone.Collection {
  initialize(models, options) {
    this.activityId = null;

    if (options.activities.length) {
      const allFetches = options.activities.map((activity) => {
        this.setActivityId(activity);
        return this.fetch();
      });

      Promise.all(allFetches).then(() => {
        this.trigger('activities:fetched');
      });
    }
  }

  get model() {
    return PersonActivity;
  }

  url() {
    return `/activities/${this.activityId}`;
  }

  setActivityId(activityId) {
    this.activityId = activityId
  }

  parse(response) {
    return [response.data].concat(this.toJSON());
  }
}

export default PersonActivities;
