import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './HelpDesk.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import HelpDeskItem from '../../components/HelpDeskItem';
import FloatingActionButton from '../../components/FloatingActionButton';
import BottomNav from '../../components/BottomNav';

class HelpDesk extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  render() {
    const helpDesks = this.props.helpDesks.filter(helpDesk => (
      helpDesk.status !== 'completed'
    ));

    const helpDesksResolved = this.props.helpDesks.filter(helpDesk => (
      helpDesk.status === 'completed'
    ));

    return (
      <div>
        <SideMenu target="/">
          Help Desk
        </SideMenu>
        <Wrapper>
          <Tabs
            className="tab"
            selectedIndex={this.state.tabIndex}
            selectedTabClassName="tab__list-item--active"
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <TabList className="tab__list">
              <Tab className="tab__list-item col-6">Open Issues</Tab>
              <Tab className="tab__list-item col-6">Resolved</Tab>
            </TabList>
            <TabPanel>
              {
                helpDesks.map(helpDesk => (
                  <HelpDeskItem
                    key={helpDesk.id}
                    helpDesk={helpDesk}
                  />
                ))
              }
            </TabPanel>
            <TabPanel>
              {
                helpDesksResolved.map(helpDesk => (
                  <HelpDeskItem
                    key={helpDesk.id}
                    helpDesk={helpDesk}
                  />
                ))
              }
            </TabPanel>
          </Tabs>
          <FloatingActionButton target="/">
            Add
          </FloatingActionButton>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { helpDesks: state.helpDesks };
}

export default connect(mapStateToProps)(HelpDesk);
