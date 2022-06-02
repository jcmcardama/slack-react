import {recentMessages} from '../api/api-recentDm';
import { Link, useRouteMatch } from "react-router-dom";


const RecentDmList = () => {
  let match = useRouteMatch();
  
  return (
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
  )
}

export default RecentDmList