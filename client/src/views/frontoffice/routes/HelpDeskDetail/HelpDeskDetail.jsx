import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return (
      <div>
        <SideMenu target="/help-desk">
          Open Issues
        </SideMenu>
        <Wrapper>
          <div className="help-desk-detail clearfix">

            <Box className="p2 mb2">
              <div className="hdd-header relative clearfix">
                <UserMedia
                  name="Arian Pradana"
                  userRole="Owner"
                  avatarPath="http://placehold.it/100x100"
                />
                <div className="hdd-timestamps">
                  <small title="1 day ago">
                    1 day ago
                  </small>
                </div>
              </div>
              <div className="clearfix">
                <p className="hdd-content h5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit accusantium officia cupiditate iusto beatae vero similique ducimus a incidunt laboriosam sequi modi voluptates debitis, sapiente rem consequuntur inventore. Doloribus.
                </p>
              </div>
              <div className="clearfix">
                <div className="right h5">
                  <span className="hdd-category__name">
                    <i className="hdd-category__icon hdd-category__icon--public" />
                    Public,
                  </span>
                  <span className="hdd-category__name">
                    <i className="hdd-category__icon hdd-category__icon--maintenance" />
                    Maintenance
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
  return { helpDesks: state.helpDesks };
}

export default connect(mapStateToProps)(HelpDeskDetail);
