import { filteredMessages } from '../api/api-recentDm';
import { Link, useRouteMatch } from "react-router-dom";


const RecentDmList = () => {
  let match = useRouteMatch();

  return (
    <ul className='dm-container'>
      {filteredMessages.map((message) => {

        return (
          <li 
            className='direct-messages' 
            key={message.key} 
            onClick={() => {
              console.log(`id: ${message.id}, class: 'User'`)
              localStorage.setItem('receiverId', message.id)
              }}>
            <Link to={`${match.url}/channels/${message.id}`}>
              {" "}
              { 
                message.uid.substring(0, message.uid.lastIndexOf("@"))
              }
            </Link>
          </li>
          // insert chat component here
        );
      })}
    </ul>
  )
}

export default RecentDmList