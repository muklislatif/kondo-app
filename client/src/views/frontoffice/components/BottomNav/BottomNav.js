import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './BottomNav.css';

class BottomNav extends Component {
  render() {
    return (
      <div className="bottom-nav clearfix center">
        <div className="col col-4">
          <NavLink exact to="/" activeClassName="active" className="bn-link">
            <i className="bn-icon bn-icon--1"></i>
          </NavLink>
        </div>
        <div className="col col-4">
          <a href="/" className="bn-link">
            <i className="bn-icon bn-icon--2"></i>
          </a>
        </div>
        <div className="col col-4">
          <a href="/" className="bn-link">
            <i className="bn-icon bn-icon--3"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default BottomNav;
