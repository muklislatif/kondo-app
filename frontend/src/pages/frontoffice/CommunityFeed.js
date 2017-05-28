import React, { Component } from 'react';
import http from 'axios';

import FrontMain from './FrontMain';
import SideMenu from './components/SideMenu/SideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import PostItem from './components/PostItem/PostItem';

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
      .get('http://localhost:8080/posts')
      .then(function(result) {
        _this.setState({
          posts: result.data
        });
      })
  }

  render() {
    return (
      <FrontMain>
        <SideMenu />
        <Wrapper>
          {this.state.posts.map(function(post) {
            return (
              <PostItem key={post.id} />
            );
          })}
        </Wrapper>
      </FrontMain>
    );
  }
}

export default CommunityFeed;
