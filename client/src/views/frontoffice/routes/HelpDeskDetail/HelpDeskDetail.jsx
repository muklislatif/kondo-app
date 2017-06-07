import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './HelpDeskDetail.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import Box from '../../components/Box';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

class HelpDeskDetail extends Component {
  render() {
    let helpDesk = this.props.helpDesksAll[this.props.match.params.id];

    if (!helpDesk) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <SideMenu target="/help-desk">
          {helpDesk.status === 'completed' ? 'Resolved Issues' : 'Open Issues'}
        </SideMenu>
        <Wrapper>
          <div className="help-desk-detail clearfix">
            <Box className="p2 mb2">
              <div className="hdd-header relative clearfix">
                <UserMedia
                  name={helpDesk.member_name}
                  userRole="Owner"
                  avatarPath="http://placehold.it/100x100"
                />
                <div className="hdd-timestamps">
                  <small title={helpDesk.created_at}>
                    { Moment(helpDesk.created_at).fromNow() }
                  </small>
                </div>
              </div>
              <div className="clearfix">
                <p className="hdd-content h5">
                  {helpDesk.content}
                </p>
              </div>
              <div className="clearfix">
                <div className="right h5">
                  <span className="hdd-category__name">
                    <i className="hdd-category__icon hdd-category__icon--public" />
                    { helpDesk.is_public ? 'Public' : 'Personal' },
                  </span>
                  <span className="hdd-category__name">
                    <i className="hdd-category__icon hdd-category__icon--maintenance" />
                    { helpDesk.category }
                  </span>
                </div>
              </div>
              <div className="clearfix">
                <h1 className="bold h5">Detail Status</h1>
              </div>
            </Box>
            <Box className="hdd-detail-item p2 mb2 h5">
              <span className="hdd-dropcaps">1.</span>
              <div className="clearfix">
                <small className="hdd-detail-timestamps">20 April 2017, 15:05</small>
              </div>
              <div className="clearfix">
                Requested and has received by Management.
              </div>
            </Box>
            <Box className="hdd-detail-item p2 mb2 h5">
              <span className="hdd-dropcaps">2.</span>
              <div className="clearfix">
                <small className="hdd-detail-timestamps">20 April 2017, 15:05</small>
              </div>
              <div className="clearfix">
                Management has assigned XXX to process.
              </div>
            </Box>
            <Box className="hdd-detail-item p2 mb2 h5">
              <span className="hdd-dropcaps">3.</span>
              <div className="clearfix">
                <small className="hdd-detail-timestamps">20 April 2017, 15:05</small>
              </div>
              <div className="clearfix">
                The issue has been resolved.
              </div>
            </Box>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    helpDesksAll: Object.assign(state.helpDesks.entities.helpDesks,
      state.helpDesksResolved.entities.helpDesksResolved),
  };
}

export default connect(mapStateToProps)(HelpDeskDetail);
