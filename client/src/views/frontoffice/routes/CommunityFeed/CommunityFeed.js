import React, { Component } from 'react';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './CommunityFeed.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import PostItem from '../../components/PostItem';
import FloatingActionButton from '../../components/FloatingActionButton';
import BottomNav from '../../components/BottomNav';

import { connect } from 'react-redux';

class CommunityFeed extends Component {
  render() {
    return (
      <div className="community-feed">
        <SideMenu target="/">
          Community Feed
        </SideMenu>
        <Wrapper>
          {this.props.posts.map((post, i) => {
            return (
              <PostItem key={i} post={post} />
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

function mapStateToProps(state, ownProps) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(CommunityFeed);
