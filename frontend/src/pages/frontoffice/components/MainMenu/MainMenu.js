import React, { Component } from 'react';
import './MainMenu.css';
import { Link } from 'react-router-dom'


class MainMenu extends Component {
  render() {
    return (
      <ul className="main-menu clearfix">
        <li className="mm-item">
          <Link to="/community-feed" className="mm-link clearfix">
            <div className="inline-block align-middle">
              <div className="mm-table table center">
                <div className="mm-table-cell table-cell align-middle col-12">
                  <i className="mm-icon mm-icon--community-feed"></i>
                </div>
              </div>
            </div>
            <div className="inline-block align-middle">
              Community
              <br/> Feed
            </div>
          </Link>
        </li>
        <li className="mm-item">
          <a href="/" className="mm-link">
            <div className="inline-block align-middle">
              <div className="mm-table table center">
                <div className="mm-table-cell table-cell align-middle col-12">
                  <i className="mm-icon mm-icon--billing-and-payment"></i>
                </div>
              </div>
            </div>
            <div className="inline-block align-middle">
              Billing &amp;
              <br/> Payment
            </div>
          </a>
        </li>
        <li className="mm-item">
          <a href="/" className="mm-link">
            <div className="inline-block align-middle">
              <div className="mm-table table center">
                <div className="mm-table-cell table-cell align-middle col-12">
                  <i className="mm-icon mm-icon--help-desk"></i>
                </div>
              </div>
            </div>
            <div className="inline-block align-middle">
              Help
              <br/> Desk
            </div>
          </a>
        </li>
        <li className="mm-item">
          <a href="/" className="mm-link">
            <div className="inline-block align-middle">
              <div className="mm-table table center">
                <div className="mm-table-cell table-cell align-middle col-12">
                  <i className="mm-icon mm-icon--service-providers"></i>
                </div>
              </div>
            </div>
            <div className="inline-block align-middle">
              Service
              <br/> Providers
            </div>
          </a>
        </li>
        <li className="mm-item">
          <a href="/" className="mm-link">
            <div className="inline-block align-middle">
              <div className="mm-table table center">
                <div className="mm-table-cell table-cell align-middle col-12">
                  <i className="mm-icon mm-icon--monthly-report"></i>
                </div>
              </div>
            </div>
            <div className="inline-block align-middle">
              Monthly
              <br/> Report
            </div>
          </a>
        </li>
      </ul>
    );
  }
}

export default MainMenu;
