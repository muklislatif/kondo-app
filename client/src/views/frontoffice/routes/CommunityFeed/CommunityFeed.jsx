import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './CommunityFeed.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import PostItem from '../../components/PostItem';
import FloatingActionButton from '../../components/FloatingActionButton';
import BottomNav from '../../components/BottomNav';

const CommunityFeed = ({ posts }) => (
  <div className="community-feed">
    <SideMenu target="/">
      Community Feed
    </SideMenu>
    <Wrapper>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
        ))}
      <FloatingActionButton target="/add-post">
        Add
      </FloatingActionButton>
    </Wrapper>
    <BottomNav />
  </div>
);

CommunityFeed.defaultProps = {
  posts: [],
};

CommunityFeed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(CommunityFeed);
