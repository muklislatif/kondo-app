import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = ({ target, children }) => (
  <div className="side-menu clearfix col-12 block">
    <Link to={target} className="sm-back">
      <i className="sm-icon" />
    </Link>
    <h1 className="sm-title">{children}</h1>
  </div>
);

SideMenu.defaultProps = {
  target: '/',
  children: '',
};

SideMenu.propTypes = {
  target: PropTypes.string,
  children: PropTypes.node,
};

export default SideMenu;
