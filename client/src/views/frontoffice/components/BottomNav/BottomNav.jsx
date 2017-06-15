import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => (
  <div className="bottom-nav clearfix center">
    <div className="col col-4">
      <NavLink exact to="/" activeClassName="active" className="bn-link">
        <i className="bn-icon bn-icon--1" />
      </NavLink>
    </div>
    <div className="col col-4">
      <NavLink exact to="/my-activities" activeClassName="active" className="bn-link">
        <i className="bn-icon bn-icon--2" />
      </NavLink>
    </div>
    <div className="col col-4">
      <a href="/" className="bn-link">
        <i className="bn-icon bn-icon--3" />
      </a>
    </div>
  </div>
);

export default BottomNav;
