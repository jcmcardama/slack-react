import {channelDetails} from '../api/api-channel-details'
import { Link, useRouteMatch } from "react-router-dom";
import AddChannelMember from "./AddChannelMember";
import { useState } from 'react';

const ItemChannel = ({channelId, channelName}) => {
    let match = useRouteMatch();
    const [hidden, setHidden] = useState(true)
    const showData = () => {
        console.log(`id: ${channelId}, class: 'Channel'`, channelDetails(channelId))
    }
    return (
        <>
            <li
                key={channelName}
                onClick={() => {
                    showData()
                    setHidden(!hidden)
                }}
            >
                <Link to={`${match.url}/channels/${channelId}`}>
                    {" "}
                    {channelName.toUpperCase()}
                </Link>
            </li>
            {!hidden ? <AddChannelMember channelId={channelId} /> : null}
            {/* insert chat component here */}
        </>
    )
}

export default ItemChannel