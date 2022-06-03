import {channelDetails} from '../api/api-channel-details'
import { Link, useRouteMatch } from "react-router-dom";
import AddChannelMember from "./AddChannelMember";
import { useState } from 'react';
import AddButton from './AddButton';

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
                }}
            >
                <Link to={`${match.url}/channels/${channelId}`}>
                    {" "}
                    {channelName.toUpperCase()}
                </Link>
            </li>

            { clickedId === channelId? <AddChannelMember channelId={channelId} /> : null}
        </>
    )
}

export default ItemChannel