import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.css';

const Wrapper = ({ children }) => (
  <div className="wrapper">
    {children}
  </div>
);

Wrapper.defaultProps = {
  children: '',
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
