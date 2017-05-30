import React, { Component } from 'react';
import http from 'axios';

import FrontMain from './FrontMain';
import SideMenu from './components/SideMenu/SideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import PostItem from './components/PostItem/PostItem';

import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';

class CommunityFeed extends Component {

  componentWillMount() {
    if (this.props.posts[0] == '') {
      this.props.actions.loadPosts();
    }
  }

  constructor(props) {
    super(props);
    this.state ={
      posts: []
    };
  }

  componentDidMount() {
    var _this = this;
  }

  render() {
    return (
      <FrontMain>
        <SideMenu />
        <Wrapper>
          {this.state.posts.map(function(post) {
            return (
              <PostItem key={post.id} post={post} />
            );
          })}
        </Wrapper>
      </FrontMain>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(CommunityFeed);
