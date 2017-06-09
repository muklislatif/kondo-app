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
      {posts.result.map(post => (
        <PostItem key={post} post={posts.entities.posts[post]} />
        ))}
      <FloatingActionButton target="/add-post">
        Add
      </FloatingActionButton>
    </Wrapper>
    <BottomNav />
  </div>
);

CommunityFeed.defaultProps = {
  posts: {
    result: [],
    entities: {},
  },
};

CommunityFeed.propTypes = {
  posts: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(CommunityFeed);
