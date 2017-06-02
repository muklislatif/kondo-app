import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Front Office
import Home from './pages/frontoffice/containers/Home';
import CommunityFeed from './pages/frontoffice/containers/CommunityFeed';
import PostForm from './pages/frontoffice/containers/PostForm';

// Back Office
import Dashboard from './pages/backoffice/Dashboard';

class App extends Component {
  componentDidMount() {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
      if (splashScreen) { splashScreen.parentNode.removeChild(splashScreen) }
    }, 3000)
  }

  render() {
    return (
      <Router basename={process.env.REACT_APP_URL}>
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
  }
}

export default App;
