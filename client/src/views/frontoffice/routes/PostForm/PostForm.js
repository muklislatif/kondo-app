import React, { Component } from 'react';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './PostForm.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

import * as actions from '../../../../actions/postActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PostForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.addPost({
      content: this.input.value
    });
    // console.log(this.props.history);
    this.props.history.push('/community-feed');
  }

  render() {
    return (
      <div>
        <SideMenu target="/community-feed">
          Add Post
        </SideMenu>
        <Wrapper>
          <div className="post-form p2">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="clearfix">
                <UserMedia
                  name="Arian Pradana"
                  userRole="Owner"
                  avatarPath="http://placehold.it/100x100" />
              </div>
              <div className="clearfix pt2">
                <textarea
                  name=""
                  ref={node => {
                    this.input = node;
                  }}
                  id=""
                  rows="10"
                  placeholder="Write something here..."
                  className='textarea textarea--full mb0 col-12'>
                </textarea>
              </div>
              <div className="action-container--stick-bottom clearfix p2">
                <button type="submit" className="btn btn--primary block col-12 center">Post</button>
              </div>
            </form>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
