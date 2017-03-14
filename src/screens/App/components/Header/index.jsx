import React from 'react';
import { Link } from 'react-router';
import './index.css';
import adminUserModel, { AdminUser } from 'models/adminUser';
import withModel from 'helpers/withModel';

function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <Link className="logo__link" to="/" />
      </div>
      <div className="nav">
        <div className="nav__item nav__item--with-text">
          <div className="header__icon header__icon--deals"></div>
          <div className="text">Deals</div>
        </div>
        <div className="nav__item nav__item--with-text">
          <div className="header__icon header__icon--calendar">
            <div className="icon-text">{ (new Date()).getDate() }</div>
          </div>
          <div className="text">Activities</div>
        </div>
        <div className="nav__item">
          <div className="header__icon header__icon--person"></div>
        </div>
        <div className="nav__item">
          <div className="header__icon header__icon--cube"></div>
        </div>
      </div>
      <div className="user-profile">
        <div className="user-profile__image user-profile__image--no-image"></div>
        <div className="user-profile__info">
          <div className="name">{ props.model.get('name') }</div>
          <div className="company">{ props.model.get('company_name') }</div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  model: React.PropTypes.instanceOf(AdminUser),
};

export default withModel(Header, adminUserModel);
