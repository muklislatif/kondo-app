import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Moment from 'moment';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './PostForm.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

import * as actions from '../../../../actions/postActions';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = 'Content is required';
  }
  return errors;
};

class PostFormComponent extends Component {
  static renderTextArea({ input, meta: { touched, error } }) {
    return (
      <div>
        <textarea
          {...input}
          placeholder="How can we help you?"
          className={classNames('textarea', 'textarea--full', 'mb0', 'col-12')}
          rows="10"
        />
        {touched && error && <span className="error h5">{error}</span>}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    return sleep(3000).then(() => {
      this.props.actions.addPost({
        content: values.content,
        is_pinned: 1,
        status: 'published',
        member_id: 1,
        member_name: 'Arian Pradana',
        member_role: 'Owner',
        member_avatar: 'http://placehold.it/100x100',
        created_at: Moment.utc().local(),
        updated_at: null,
      });
      this.props.history.push('/community-feed');
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <SideMenu target="/community-feed">
          Add Post
        </SideMenu>
        <Wrapper>
          <div className="post-form p2">
            <form onSubmit={handleSubmit(this.submit)}>
              <div className="clearfix">
                <UserMedia
                  name="Arian Pradana"
                  userRole="Owner"
                  avatarPath="http://placehold.it/100x100"
                />
              </div>
              <div className="clearfix pt2">
                <Field
                  name="content"
                  component={PostFormComponent.renderTextArea}
                />
              </div>
              <div className="action-container--stick-bottom clearfix p2">
                <button
                  type="submit"
                  className="btn btn--primary block col-12 center"
                  disabled={submitting}
                >
                  {submitting ? 'Loading ...' : 'Post'}
                </button>
              </div>
            </form>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

PostFormComponent.defaultProps = {
  actions: {},
  history: {},
  submitting: false,
};

PostFormComponent.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

const PostForm = reduxForm({
  form: 'postForm',
  validate,
})(PostFormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
