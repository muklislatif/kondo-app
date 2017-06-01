import React, { Component } from 'react';
import http from 'axios';

import FrontMain from './FrontMain';
import SideMenu from './components/SideMenu/SideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import UserMedia from './components/UserMedia/UserMedia';

import { Link } from 'react-router-dom'

import './PostForm.css';

class PostForm extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;
  }

  render() {
    return (
      <FrontMain>
        <SideMenu target="/community-feed">
          Add Post
        </SideMenu>
        <Wrapper>
          <div className="post-form p2">
            <div className="clearfix">
              <UserMedia
                name="Arian Pradana"
                role="Owner"
                avatarPath="http://placehold.it/100x100" />
            </div>
            <div className="clearfix pt2">
              <textarea
                name=""
                id=""
                rows="30"
                placeholder="Write something here..."
                className='textarea textarea--full mb0 col-12'>
              </textarea>
            </div>
            <div className="action-container--stick-bottom clearfix p2">
              <Link to="/community-feed" className="btn btn--primary block center">Post</Link>
            </div>
          </div>
        </Wrapper>
      </FrontMain>
    );
  }
}

export default PostForm;
