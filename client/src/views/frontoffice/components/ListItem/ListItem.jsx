import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ListItem.css';

const ListItem = (props) => {
  const { className, children, hasAvatar } = props;
  return (
    <li className={classNames('li-item', 'clearfix', { 'has-avatar': hasAvatar }, className)}>
      {children}
    </li>
  );
};

ListItem.defaultProps = {
  className: '',
  children: '',
  hasAvatar: false,
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hasAvatar: PropTypes.bool,
};

export default ListItem;
