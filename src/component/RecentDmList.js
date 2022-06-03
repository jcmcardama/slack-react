import { filteredMessages } from '../api/api-recentDm';
import { Link, useRouteMatch } from "react-router-dom";
import Chat from './Chat';


const RecentDmList = ({clickedId, changeClickStatus}) => {
  let match = useRouteMatch();

  return (
    <ul className='dm-container'>
      {filteredMessages.map((message) => {

        return (
          <li 
            className='direct-messageslist' 
            key={message.key} 
            onClick={() => {
              changeClickStatus(message.id)
              }}>
            <img src="https://a.slack-edge.com/80588/marketing/img/avatars/slackbot/avatar-slackbot@2x.png" alt={`dp pic ${message.key}`}/>
            <Link to={`${match.url}/channels/${message.id}`}>
              {" "}
              { 
                message.uid.substring(0, message.uid.lastIndexOf("@"))
              }
            </Link>
            { clickedId === message.id ? <Chat chatName={message.uid.substring(0, message.uid.lastIndexOf("@"))} receiverId={message.id} receiverClass={'User'}/> : null}
          </li>
          // insert chat component here
        );
      })}
    </ul>
  )
}

export default RecentDmList