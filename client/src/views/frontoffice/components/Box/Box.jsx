import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Box.css';

const Box = ({ className, children }) => (
  <div className={classNames('box', className)}>
    {children}
  </div>
);

Box.defaultProps = {
  className: '',
  children: '',
};

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Box;
