import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./component/Login.js";
import UserRegistration from "./component/UserRegistration.js";
import Panel from "./component/Panel.js";
import NotFound from "./component/NotFound.js";
import Home from "./component/Home.js";
import {userChannelNamesAndId} from "./api/api-channels";
import {fetchRecentMessages} from './api/api-recentDm';
import Chat from "./component/Chat.js";

//init user messages and channels
fetchRecentMessages()
userChannelNamesAndId()

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
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/panel">Panel</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/create-account" component={UserRegistration} />
          <Route path="/panel" component={Panel} />
          <Route path="/chat" component={Chat} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;