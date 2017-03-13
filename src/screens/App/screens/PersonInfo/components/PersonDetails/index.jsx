import React from 'react';
import moment from 'moment';

const getPrimaryPersonData = (dataSet) => {
  const primaryItem = (dataSet && dataSet.find((item) => item.primary));

  return (primaryItem && primaryItem.value) || '';
};

const findActivity = (activities, personModel, activityType) => {
  return activities
    .find((activityModel) => activityModel.get('id') === personModel.get(activityType));
};

const getActivityTitle = (activity) => {
  const subject = activity.get('subject');
  const dueDate = activity.get('due_date');
  const fromNow = moment(dueDate).fromNow();

  return `${subject}, ${fromNow}`;
};

class PersonDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastActivity: '',
      nextActivity: ''
    };
  }

  setActivities() {
    const { personModel } = this.props;
    const activities = personModel.get('activities');
    const lastActivity = findActivity(activities, personModel, 'last_activity_id');
    const nextActivity = findActivity(activities, personModel, 'next_activity_id');
    let lastActivityTitle = '';
    let nexActivityTitle = '';

    if (lastActivity) {
      lastActivityTitle = getActivityTitle(lastActivity);
    }

    if (nextActivity) {
      nexActivityTitle = getActivityTitle(nextActivity);
    }

    this.setState({
      lastActivity: lastActivityTitle,
      nextActivity: nexActivityTitle,
    });
  }

  componentDidMount() {
    this.props.personModel
      .get('activities')
      .once('activities:fetched', this.setActivities, this);
  }

  getPersonData() {
    const { personModel } = this.props;

    return {
      phone: getPrimaryPersonData(personModel.get('phone')),
      email: getPrimaryPersonData(personModel.get('email')),
      added: moment(personModel.get('add_time')).format('MMMM D, YYYY'),
      openDeals: personModel.get('open_deals_count'),
    };
  }

  render() {
    const personData = this.getPersonData();

    return (
      <div className="person__details">
        <div className="detail">
          <div className="detail__key">Phone </div>
          <div className="detail__value">{ personData.phone }</div>
        </div>
        <div className="detail">
          <div className="detail__key">Email</div>
          <div className="detail__value">{ personData.email }</div>
        </div>
        <div className="detail">
          <div className="detail__key">Added</div>
          <div className="detail__value">{ personData.added }</div>
        </div>
        <div className="detail">
          <div className="detail__key">Open deals</div>
          <div className="detail__value">{ personData.openDeals }</div>
        </div>
        <div className="detail">
          <div className="detail__key">Next activity</div>
          <div className="detail__value">{ this.state.nextActivity }</div>
        </div>
        <div className="detail">
          <div className="detail__key">Last activity</div>
          <div className="detail__value">{ this.state.lastActivity }</div>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
