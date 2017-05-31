import React, { Component } from 'react';
import http from 'axios';

import FrontMain from './FrontMain';
import SideMenu from './components/SideMenu/SideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import PostItem from './components/PostItem/PostItem';

import {connect} from 'react-redux';
// import * as postActions from '../../actions/postActions';

class CommunityFeed extends Component {

  // componentWillMount() {
  //   if (this.props.posts[0] == '') {
  //     this.props.actions.loadPosts();
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = http
      .get('/dummyApi/posts.json')
      .then(function(result) {
        console.log(result.data);
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
          {this.state.posts.map(post => {
            return (
              <PostItem key={post.id} post={post} />
            );
          })}
        </Wrapper>
      </FrontMain>
    );
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     posts: state.posts
//   };
// }

// export default connect(mapStateToProps)(CommunityFeed);

export default CommunityFeed;
