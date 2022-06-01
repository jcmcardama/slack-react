import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Login from "./component/Login.js";
import UserRegistration from "./component/UserRegistration.js";
import Chat from "./component/Chat.js";
import AddChannel from "./component/Channel.js";

const Home = () => {
  return <h1>Home</h1>;
};

const Message = () => {
  return (
    <div>
      <p>...hello, message...</p>
      <Chat />
    </div>
  )
};

// messages coming from the database server
const messages = [
  {
    id: "q12341234",
    name: "Edcel",
  },
  {
    id: "q12341234",
    name: "Carlo",
  },
];

const Messages = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Direct Message</h2>

      <ul>
        {messages.map((channel) => {
          return (
            <li>
              <Link to={`${match.url}/channels/${channel.id}`}>
                {" "}
                {channel.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        <Route path={`${match.path}/:messageId`}>
          <Message />
        </Route>
        <Route path={match.path}>
          <Chat />
        </Route>
      </Switch>
    </div>
  );
};

const Channel = () => {
  let { channelId, messageId } = useParams();
  return (
    <h3>
      Requested Channel ID: {channelId}, {messageId}
    </h3>
  );
};

const channels = [
  {
    id: "q12341234",
    name: "Batch18",
  },
  {
    id: "q12341234",
    name: "Batch1",
  },
];

const Channels = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Channels</h2>
      <AddChannel />

      <ul>
        {channels.map((channel) => {
          return (
            <li>
              <Link to={`${match.url}/channels/${channel.id}`}>
                {" "}
                {channel.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        <Route path={`${match.path}/:channelId/:messageId`}>
          <Message />
        </Route>
        <Route path={`${match.path}/:channelId`}>
          <Channel />
        </Route>
        {/* <Route path={match.path}>
          <h3>Please select a Channel</h3>
        </Route> */}
      </Switch>
    </div>
  );
};

const Dashboard = () => {

  return (
    <div>
      <h2>Dashboard</h2>

      <Channels />
      <Messages />
    </div>
  );
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
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/create-account" component={UserRegistration} />
          <Route path="/messages" component={Messages} />
          <Route path="/channels" component={Channels} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;