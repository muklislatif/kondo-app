import React, { Component } from 'react';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

import { Link } from 'react-router-dom'

import './PostForm.css';

class PostForm extends Component {
  render() {
    return (
      <div>
        <SideMenu target="/community-feed">
          Add Post
        </SideMenu>
        <Wrapper>
          <div className="post-form p2">
            <div className="clearfix">
              <UserMedia
                name="Arian Pradana"
                userRole="Owner"
                avatarPath="http://placehold.it/100x100" />
            </div>
            <div className="clearfix pt2">
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Write something here..."
                className='textarea textarea--full mb0 col-12'>
              </textarea>
            </div>
            <div className="action-container--stick-bottom clearfix p2">
              <Link to="/community-feed" className="btn btn--primary block center">Post</Link>
            </div>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

export default PostForm;
