import React, { Component } from 'react';
import './PostItem.css';
import Moment from 'moment';

import UserMedia from '../UserMedia/UserMedia';

class PostItem extends Component {

  _renderPinnedPost() {
    return (
      <div className="right">
        <span className="pi-pinned-post">
          <i className="pi-pinned-post__icon" />
          Pinned Post
        </span>
      </div>
    )
  }

  render() {
    const dateTime= this.props.post.created_at;
    const formattedDT = Moment(dateTime).startOf('hour').fromNow();

    return (
      <div className="post-item clearfix p2 left-align">
        <div className="pi-header clearfix">
          <UserMedia
            name={this.props.post.member_name}
            userRole={this.props.post.member_role}
            avatarPath={this.props.post.member_avatar} />
          <div className="pi-timestamps">
            <small>
              {formattedDT}
            </small>
          </div>
        </div>
        <p className="pi-content clearfix">
          {this.props.post.content}
        </p>
        <div className="pi-footer clearfix">
          { this.props.post.is_pinned ? this._renderPinnedPost() : '' }
        </div>
      </div>
    );
  }
}

export default PostItem;
