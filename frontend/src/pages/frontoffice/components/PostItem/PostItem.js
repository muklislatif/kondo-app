import React, { Component } from 'react';
import './PostItem.css';
import { Link } from 'react-router-dom'


class PostItem extends Component {
  render() {
    return (
      <div className="post-item clearfix p2 left-align">
        <div className="pi-header clearfix">
          <img src="http://placehold.it/50x50" alt="" className="pi-avatar" width="50" height="50" />
          <div className="pi-author">
            <h1 className="pi-author__name">name</h1>
            <span className="pi-author__role">
              user role
            </span>
          </div>
          <div className="pi-timestamps">
            <small>date</small>
          </div>
        </div>
        <h1 className="pi-subject clearfix h4">
          subject
        </h1>
        <p className="pi-content clearfix">
          content
        </p>
        <div className="pi-footer clearfix">
          <div className="right">
            <a href="/" className="pi-pinned-post">
              <i className="pi-pinned-post__icon" />
              Pinned Post
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
