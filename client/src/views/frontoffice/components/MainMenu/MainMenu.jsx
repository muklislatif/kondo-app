import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => (
  <ul className="main-menu clearfix">
    <li className="mm-item">
      <Link to="/community-feed" className="mm-link clearfix">
        <div className="inline-block align-middle">
          <div className="mm-table table center">
            <div className="mm-table-cell table-cell align-middle col-12">
              <i className="mm-icon mm-icon--community-feed" />
            </div>
          </div>
        </div>
        <div className="inline-block align-middle">
          Community
          <br /> Feed
        </div>
      </Link>
    </li>
    <li className="mm-item">
      <a href="/" className="mm-link">
        <div className="inline-block align-middle">
          <div className="mm-table table center">
            <div className="mm-table-cell table-cell align-middle col-12">
              <i className="mm-icon mm-icon--billing-and-payment" />
            </div>
          </div>
        </div>
        <div className="inline-block align-middle">
          Billing &amp;
          <br /> Payment
        </div>
      </a>
    </li>
    <li className="mm-item">
      <Link to="/help-desk" className="mm-link">
        <div className="inline-block align-middle">
          <div className="mm-table table center">
            <div className="mm-table-cell table-cell align-middle col-12">
              <i className="mm-icon mm-icon--help-desk" />
            </div>
          </div>
        </div>
        <div className="inline-block align-middle">
          Help
          <br /> Desk
        </div>
      </Link>
    </li>
    <li className="mm-item">
      <Link to="/service-providers" className="mm-link clearfix">
        <div className="inline-block align-middle">
          <div className="mm-table table center">
            <div className="mm-table-cell table-cell align-middle col-12">
              <i className="mm-icon mm-icon--service-providers" />
            </div>
          </div>
        </div>
        <div className="inline-block align-middle">
          Service
          <br /> Providers
        </div>
      </Link>
    </li>
    <li className="mm-item">
      <Link to="/monthly-report" className="mm-link clearfix">
        <div className="inline-block align-middle">
          <div className="mm-table table center">
            <div className="mm-table-cell table-cell align-middle col-12">
              <i className="mm-icon mm-icon--monthly-report" />
            </div>
          </div>
        </div>
        <div className="inline-block align-middle">
          Monthly
          <br /> Report
        </div>
      </Link>
    </li>
  </ul>
);

export default MainMenu;
