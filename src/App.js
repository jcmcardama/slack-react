import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./component/Login.js";
import UserRegistration from "./component/UserRegistration.js";
import Dashboard from "./component/Dashboard.js";
import {userChannelNamesAndId} from "./api/api-channels";
import {fetchRecentMessages} from './api/api-recentDm';

fetchRecentMessages()
userChannelNamesAndId()

const Home = () => {
  return <Login />;
};

const NotFound = () => {
  return (
    <div>
      <h1>Page cannot be found.</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/create-account" component={UserRegistration} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;