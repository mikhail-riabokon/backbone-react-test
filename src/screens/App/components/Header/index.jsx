import React from 'react';
import { Link } from 'react-router';
import './index.css';

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link className="logo__link" to="/">pipedrive</Link>
      </h1>
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
          <div className="name">Mikhail Riabokon</div>
          <div className="company">Test</div>
        </div>
      </div>
    </div>
  );
}


export default Header;
