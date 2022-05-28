import './App.css';
import {useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


// User Registration
// -needs email 
// -password
// -password confirmation

// Login
// -needs email
// -needs password

// Send Message
// -receiver id
// -receiver class
// -body

// Retrieve Messages
// -sender id 
// -receiver class 
// -receiver id 

// Create Channel with members
// -name of channel 
// -user id of creator 

// Get all users channels


// Get channel details via channel ID

// Add member to a channel
// -id 
// -member id 

// List of All Users
// Get all users owned channels
// Recently DMs

function Signin() {
  return (
    <></>
  )
}

function CreateAccount() {
  return (
    <div>
      <h2>Create an Account</h2>
      <label>Full Name
        <input type="text" />
      </label>
      <label>Password
        <input type="password" />
      </label>
        <input type="submit" value="Create Account" />
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>Channel</li>
        <li>Direct Messages</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/get-started">Create an account</Link>
            </li>
            <li>
              <Link to="/client">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/get-started" component={CreateAccount} />
        <Route path="/client" component={Dashboard} /> 
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
