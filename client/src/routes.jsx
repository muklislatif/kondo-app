import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import createBrowserHistory from 'history/createBrowserHistory';

// Front Office
import Home from './views/frontoffice/routes/Home';
import CommunityFeed from './views/frontoffice/routes/CommunityFeed';
import PostForm from './views/frontoffice/routes/PostForm';
import HelpDesk from './views/frontoffice/routes/HelpDesk';
import HelpDeskDetail from './views/frontoffice/routes/HelpDeskDetail';
import IssueForm from './views/frontoffice/routes/IssueForm';
import ServiceProvider from './views/frontoffice/routes/ServiceProvider';
import ServiceProviderList from './views/frontoffice/routes/ServiceProviderList';

// Back Office
import Dashboard from './views/backoffice/Dashboard';

const history = createBrowserHistory({
  basename: process.env.REACT_APP_URL,
});

const Routes = () => (
  <Router history={history}>
    <Route
      render={({ location, history, match }) => {
        return (
          <RouteTransition
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
            <Switch key={location.key} location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/community-feed" component={CommunityFeed} />
              <Route path="/add-post" component={PostForm} />
              <Route exact path="/help-desk" component={HelpDesk} />
              <Route path="/help-desk/:id" component={HelpDeskDetail} />
              <Route path="/add-issue" component={IssueForm} />
              <Route exact path="/service-providers" component={ServiceProvider} />
              <Route path="/service-providers/:id" component={ServiceProviderList} />
              <Route exact path="/admin" component={Dashboard} />
              <Route path="/admin/members" component={Dashboard} />
              <Route path="/admin/carousels" component={Dashboard} />
              <Route path="/admin/posts" component={Dashboard} />
            </Switch>
          </RouteTransition>
        )
      }}
    />
  </Router>
);

export default Routes;
