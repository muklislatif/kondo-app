import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './PostItem.css';

import UserMedia from '../UserMedia/UserMedia';

class PostItem extends Component {
  static renderPinnedPost() {
    return (
      <div className="right">
        <span className="pi-pinned-post">
          <i className="pi-pinned-post__icon" />
          Pinned Post
        </span>
      </div>
    );
  }

  render() {
    const { post } = this.props;
    const dateTime = post.created_at;
    const formattedDT = Moment(dateTime).fromNow();

    return (
      <div className="post-item clearfix p2 left-align">
        <div className="pi-header clearfix">
          <UserMedia
            name={post.member_name}
            userRole={post.member_role}
            avatarPath={post.member_avatar}
          />
          <div className="pi-timestamps">
            <small title={dateTime}>
              {formattedDT}
            </small>
          </div>
        </div>
        <p className="pi-content clearfix">
          {post.content}
        </p>
        <div className="pi-footer clearfix">
          { post.is_pinned ? PostItem.renderPinnedPost() : null }
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  post: {},
};

PostItem.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
};

export default PostItem;
