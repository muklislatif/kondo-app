import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class IssueForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.addHelpDesk({
      category: this.inputCategory.value,
      content: this.input.value,
      created_at: Moment.utc().local(),
      is_public: this.inputType.value === '1',
      member_name: 'Arian Pradana',
      status: 'requested',
      updated_at: null,
    });
    this.props.history.push('/help-desk');
  }

  render() {
    return (
      <div>
        <SideMenu target="/help-desk">
          Report an Issue
        </SideMenu>
        <Wrapper>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="p2 mb2 clearfix">
              <div className="clearfix">
                <select
                  className="select select--popup"
                  ref={(node) => {
                    this.inputType = node;
                  }}
                >
                  <option value="">Select Issue Type</option>
                  <option value="0">Personal</option>
                  <option value="1">Public</option>
                </select>
                <select
                  className="select select--popup"
                  ref={(node) => {
                    this.inputCategory = node;
                  }}
                >
                  <option value="">Select Issue Category</option>
                  <option value="House Keeping">House Keeping</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Administration">Administration</option>
                  <option value="Security">Security</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="relative clearfix">
                <UserMedia
                  name="Arian Pradana"
                  userRole="Owner"
                  avatarPath="http://placehold.it/100x100"
                />
              </div>
              <div className="clearfix pt2">
                <textarea
                  name=""
                  ref={(node) => {
                    this.input = node;
                  }}
                  id=""
                  rows="10"
                  placeholder="How can we help you?"
                  className="textarea textarea--full mb0 col-12"
                />
              </div>
              <div className="action-container--stick-bottom clearfix p2">
                <button type="submit" className="btn btn--primary block col-12 center">Post</button>
              </div>
            </div>
          </form>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

IssueForm.defaultProps = {
  actions: {},
  history: {},
};

IssueForm.propTypes = {
  actions: PropTypes.objectOf(PropTypes.funct),
  history: PropTypes.objectOf(PropTypes.any),
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, mapDispatchToProps)(IssueForm);
