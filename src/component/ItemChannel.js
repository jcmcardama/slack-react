import {channelDetails} from '../api/api-channel-details'
import { Link, useRouteMatch } from "react-router-dom";
import AddChannelMember from "./AddChannelMember";
import Chat from './Chat';

const ItemChannel = ({clickedId, changeClickStatus, channelId, channelName}) => {
    let match = useRouteMatch();

    // const showData = () => {
    //     console.log(`id: ${channelId}, class: 'Channel'`, channelDetails(channelId))
    // }
    return (
        <>
            <li
                key={channelName}
                onClick={() => {
                    changeClickStatus(channelId)
                }}
                className='channel-list'
            >
                <Link to={`${match.url}/channels/${channelId}`} className='channel-name'>
                    {" "}
                    {channelName}
                </Link>
            </li>
            { clickedId === channelId ? <AddChannelMember channelId={channelId} /> : null}
            { clickedId === channelId ? <Chat chatName={channelName} receiverId={channelId} receiverClass={'Channel'}/> : null}
        </>
    )
}

export default ItemChannel