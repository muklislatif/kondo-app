import React, { Component } from 'react';
import http from 'axios';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import PostItem from '../../components/PostItem';
import FloatingActionButton from '../../components/FloatingActionButton';
import BottomNav from '../../components/BottomNav';

class CommunityFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = http
      .get(`${process.env.REACT_APP_URL_API}/dummyApi/posts.json`)
      .then(function(result) {
        _this.setState({
          posts: result.data
        });
      })
  }

  render() {
    return (
      <div>
        <SideMenu target="/">
          Community Feed
        </SideMenu>
        <Wrapper>
          {this.state.posts.map(post => {
            return (
              <PostItem key={post.id} post={post} />
            );
          })}
          <FloatingActionButton target="/add-post">
            Add
          </FloatingActionButton>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

export default CommunityFeed;
