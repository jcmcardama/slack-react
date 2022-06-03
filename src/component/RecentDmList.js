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
            className='direct-messages' 
            key={message.key} 
            onClick={() => {
              changeClickStatus(message.id)
              }}>
            <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" className='profile-pic' alt='user profile pic'/>
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