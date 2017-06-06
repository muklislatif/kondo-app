import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './IssueForm.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

class IssueForm extends Component {
  render() {
    return (
      <div>
        <SideMenu target="/help-desk">
          Report an Issue
        </SideMenu>
        <Wrapper>
          <div className="p2 mb2 clearfix">
            <div className="clearfix">
              <select name="" id="" className="select select--popup">
                <option value="">Select Issue Type</option>
                <option value="1">Personal</option>
                <option value="2">Public</option>
              </select>
              <select name="" id="" className="select select--popup">
                <option value="">Select Issue Category</option>
                <option value="1">House Keeping</option>
                <option value="2">Maintenance</option>
                <option value="3">Administration</option>
                <option value="4">Security</option>
                <option value="5">Others</option>
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
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { helpDesks: state.helpDesks };
}

export default connect(mapStateToProps)(IssueForm);
