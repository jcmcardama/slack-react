import Login from './component/Login';
import UserRegistration from './component/UserRegistration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

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

function App() {
  return (
    <>
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
        <Route path="/get-started" component={UserRegistration} />
        <Route path="/client" /> 
        <Route path="/signin" component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
