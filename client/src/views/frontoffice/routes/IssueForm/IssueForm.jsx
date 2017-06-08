import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Moment from 'moment';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './IssueForm.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

import * as actions from '../../../../actions/helpDeskActions';

const validate = (values) => {
  const errors = {};
  if (!values.issueType) {
    errors.issueType = 'Issue type is required';
  }
  if (!values.issueCategory) {
    errors.issueCategory = 'Issue category is required';
  }
  if (!values.content) {
    errors.content = 'Content is required';
  }
  return errors;
};

class IssueFormComponent extends Component {
  static renderSelect({ input, children, meta: { touched, error } }) {
    return (
      <div className="clearfix">
        <select
          {...input}
          className={classNames('select', 'select--popup', 'my1', 'col-12',
            error ? 'has-error' : 'has-normal',
          )}
        >
          {children}
        </select>

        {touched && error && <span className="error h5 mb1">{error}</span>}
      </div>
    );
  }

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
      this.props.actions.addHelpDesk({
        category: values.issueCategory,
        content: values.content,
        created_at: Moment.utc().local(),
        is_public: values.issueType === '1',
        member_name: 'Arian Pradana',
        status: 'requested',
        updated_at: null,
      });
      this.props.history.push('/help-desk');
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <SideMenu target="/help-desk">
          Report an Issue
        </SideMenu>
        <Wrapper>
          <form onSubmit={handleSubmit(this.submit)}>
            <div className="issue-form p2 mb2 clearfix">
              <div className="clearfix">
                <Field
                  name="issueType"
                  component={IssueFormComponent.renderSelect}
                >
                  <option value="">Select Issue Type</option>
                  <option value="0">Personal</option>
                  <option value="1">Public</option>
                </Field>
                <Field
                  name="issueCategory"
                  component={IssueFormComponent.renderSelect}
                >
                  <option value="">Select Issue Category</option>
                  <option value="House Keeping">House Keeping</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Administration">Administration</option>
                  <option value="Security">Security</option>
                  <option value="Others">Others</option>
                </Field>
              </div>
              <div className="relative clearfix pt1">
                <UserMedia
                  name="Arian Pradana"
                  userRole="Owner"
                  avatarPath="http://placehold.it/100x100"
                />
              </div>
              <div className="clearfix pt2">
                <Field
                  name="content"
                  component={IssueFormComponent.renderTextArea}
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
            </div>
          </form>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

IssueFormComponent.defaultProps = {
  actions: {},
  history: {},
  submitting: false,
};

IssueFormComponent.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

const IssueForm = reduxForm({
  form: 'issueForm',
  validate,
})(IssueFormComponent);

export default connect(null, mapDispatchToProps)(IssueForm);
