import './App.css';
import Login from './component/Login.js';
import Chat from './component/Chat.js'
// import Dashboard from './component/Dashboard';
// import {userChannels} from './api/api-channels.js'


function App() {
  return (
    <div>
      <Login />
      {/* {userChannels()} */}
      <Chat receiverId={2118} receiverClass={"User"}/>
    </div>
  );
}

export default App;
