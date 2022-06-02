import { Link, useRouteMatch } from "react-router-dom";
import { channels } from "../api/api-channels";
import {channelDetails} from '../api/api-channel-details'
import AddChannelMember from "./AddChannelMember";

const ChannelList = () => {
    let match = useRouteMatch();

    return (
        <ul>
            {channels.map((channel) => {
                return (
                    <>
                        <li
                            key={channel.name}
                            onClick={() => {
                                console.log(`id: ${channel.id}, class: 'Channel'`,channelDetails(channel.id))
                            }}
                        >
                            <Link to={`${match.url}/channels/${channel.id}`}>
                                {" "}
                                {channel.name.toUpperCase()}
                            </Link>
                        </li>
                        <AddChannelMember channelId={channel.id}/>
                    </>
                );
            })}
        </ul>
    )
}

export default ChannelList