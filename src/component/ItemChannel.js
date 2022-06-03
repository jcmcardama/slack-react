import {channelDetails} from '../api/api-channel-details'
import { Link, useRouteMatch } from "react-router-dom";
import AddChannelMember from "./AddChannelMember";

const ItemChannel = ({clickedId, changeClickStatus, channelId, channelName}) => {
    let match = useRouteMatch();

    const showData = () => {
        console.log(`id: ${channelId}, class: 'Channel'`, channelDetails(channelId))
    }
    return (
        <>
            <li
                key={channelName}
                onClick={() => {
                    showData()
                    changeClickStatus(channelId)
                    localStorage.setItem('receiverId', channelId)
                }}
                className='channel-list'
            >
                <Link to={`${match.url}/channels/${channelId}`} className='channel-name'>
                    {" "}
                    {channelName.toUpperCase()}
                </Link>
            </li>

            { clickedId === channelId? <AddChannelMember channelId={channelId} /> : null}
        </>
    )
}

export default ItemChannel