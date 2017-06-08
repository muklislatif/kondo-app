import React from 'react';
import PropTypes from 'prop-types';
import './UserMedia.css';

const UserMedia = ({ avatarPath, name, userRole }) => (
  <div className="user-media clearfix">
    <div className="um-avatar-container">
      <img src={avatarPath} alt="" className="um-avatar" width="50" height="50" />
    </div>
    <div className="um-author">
      <h1 className="um-author__name">{name}</h1>
      <span className="um-author__role">
        {userRole}
      </span>
    </div>
  </div>
);

UserMedia.defaultProps = {
  avatarPath: 'http://placehold.it/100x100',
  name: '-',
  userRole: '-',
};

UserMedia.propTypes = {
  avatarPath: PropTypes.string,
  name: PropTypes.string,
  userRole: PropTypes.string,
};

export default UserMedia;
