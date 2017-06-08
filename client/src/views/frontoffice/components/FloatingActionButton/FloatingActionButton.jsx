import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FloatingActionButton.css';

const FloatingActionButton = ({ target, children }) => (
  <Link to={target} className="floating-action-button">
    <i className="fcb-icon fcb-icon--add">{children}</i>
  </Link>
);

FloatingActionButton.defaultProps = {
  target: '/',
  children: '',
};

FloatingActionButton.propTypes = {
  target: PropTypes.string,
  children: PropTypes.node,
};

export default FloatingActionButton;
