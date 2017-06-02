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

// Back Office
import Dashboard from './views/backoffice/Dashboard';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const Routes = () => (
  <Router basename={process.env.REACT_APP_URL} history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/community-feed" component={CommunityFeed} />
        <Route path="/add-post" component={PostForm} />
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
