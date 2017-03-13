import React from 'react';
import moment from 'moment';

function PersonDetails({ personModel }) {
  const phones = personModel.get('phone');
  const primaryPhone = (phones && phones.find((phone) => phone.primary)) || {};
  const emails = personModel.get('email');
  const primaryEmail = (emails && emails.find((email) => email.primary)) || {};
  const added = moment(personModel.get('add_time')).format('MMMM D, YYYY');
  const openDeals = personModel.get('open_deals_count');

  return (
    <div className="person__details">
      <div className="detail">
        <div className="detail__key">Phone </div>
        <div className="detail__value">{ primaryPhone.value }</div>
      </div>
      <div className="detail">
        <div className="detail__key">Email</div>
        <div className="detail__value">{ primaryEmail.value }</div>
      </div>
      <div className="detail">
        <div className="detail__key">Added</div>
        <div className="detail__value">{ added }</div>
      </div>
      <div className="detail">
        <div className="detail__key">Open deals</div>
        <div className="detail__value">{ openDeals }</div>
      </div>
      <div className="detail">
        <div className="detail__key">Next activity</div>
        <div className="detail__value">+111111111111</div>
      </div>
      <div className="detail">
        <div className="detail__key">Last activity</div>
        <div className="detail__value">+111111111111</div>
      </div>
    </div>
  );
}

export default PersonDetails;
