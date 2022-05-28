import './App.css';
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
    <div>
      <h2>Sign in to Slack</h2>
      <label>email
        <input type="text" />
      </label>
      <label> password
        <input type="password" />
      </label>
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
        <Route path="/get-started">
          <h2>Create Account</h2>
        </Route>
        <Route path="/client">
          <h2>Dashboard</h2>
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
