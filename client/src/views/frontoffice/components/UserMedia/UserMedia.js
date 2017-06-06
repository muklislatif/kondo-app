import React, { Component } from 'react';
import './UserMedia.css';

class UserMedia extends Component {
  render() {
    return (
      <div className="user-media clearfix">
        <div className="um-avatar-container">
          <img src={this.props.avatarPath} alt="" className="um-avatar" width="50" height="50" />
        </div>
        <div className="um-author">
          <h1 className="um-author__name">{this.props.name}</h1>
          <span className="um-author__role">
            {this.props.userRole}
          </span>
        </div>
      </div>
    );
  }
}

export default UserMedia;
