import { useState, useEffect } from "react";
import {retrieveMessage} from "../api/api-retrieve-messages.js"
import ListMessage from "./ListMessage.js";
import ChatTitle from "./ChatTitle.js";
import AddChannel from './AddChannel'
import {listMessage} from "../api/api-retrieve-messages.js";
import Chat from "./Chat.js";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import {channels} from "../api/api-channels";
import {recentMessages} from '../api/api-recentDm';
import {channelDetails} from '../api/api-channel-details'


//messages coming from the database server

const Messages = () => {
  let match = useRouteMatch();
  
  return (
    <div>
      <h2>Direct Message</h2>
      <ul >
        {recentMessages.map((message) => {
          
          return (
            <li key={message.key} onClick={() => console.log(`id: ${message.id}, class: 'User'`)}>
              <Link  to={`${match.url}/channels/${message.id}`}>
                {" "}
                {message.uid}
              </Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        {/* <Route path={`${match.path}/:messageId`}>
          <Messages />
        </Route>
        <Route path={match.path}>
          <Chat />
        </Route> */}
      </Switch>
    </div>
  );
};

const Channels = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Channels<AddChannel/></h2>
      <ul>
        {channels.map((channel) => {
          return (
            <li key={channel.name} onClick={() => console.log(`id: ${channel.id}, class: 'Channel', Members: ${channelDetails(channel.id)}`)}>
              <Link to={`${match.url}/channels/${channel.id}`}>
                {" "}
                {channel.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        {/* <Route path={`${match.path}/:channelId/:messageId`}>
          <Messages />
        </Route>
        <Route path={`${match.path}/:channelId`}>
          <Channels />
        </Route> */}
      </Switch>
    </div>
  );
};


const Dashboard = (prop) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function listMessage(receiverId, receiverClass){
            const messageArray = await retrieveMessage(receiverId, receiverClass);
            setData(messageArray);
        }
        listMessage(prop.receiverId, prop.receiverClass);
    });

    return(
        <div>
            <ChatTitle data={data} class={prop.receiverClass}/>
            <ListMessage data={data}/>
            <Channels />
            <Messages />
        </div>
    );
};
export default Dashboard;
