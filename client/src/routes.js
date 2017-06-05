import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

// Front Office
import Home from './views/frontoffice/routes/Home';
import CommunityFeed from './views/frontoffice/routes/CommunityFeed';
import PostForm from './views/frontoffice/routes/PostForm';
import HelpDesk from './views/frontoffice/routes/HelpDesk';
import HelpDeskDetail from './views/frontoffice/routes/HelpDeskDetail';

// Back Office
import Dashboard from './views/backoffice/Dashboard';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({
  basename: process.env.REACT_APP_URL
});

const Routes = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/community-feed" component={CommunityFeed} />
        <Route path="/add-post" component={PostForm} />
        <Route exact path="/help-desk" component={HelpDesk} />
        <Route path="/help-desk/:id" component={HelpDeskDetail} />
      </Switch>
      <Switch>
        <Route exact path="/admin" component={Dashboard} />
        <Route path="/admin/members" component={Dashboard} />
        <Route path="/admin/carousels" component={Dashboard} />
        <Route path="/admin/posts" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
