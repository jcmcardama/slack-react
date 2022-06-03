
import { channels } from "../api/api-channels";
import { Link, useRouteMatch } from "react-router-dom";
import AddChannelMember from "./AddChannelMember";
import Chat from "./Chat";

const ChannelList = ({clickedId, changeClickStatus}) => {
    let match = useRouteMatch()

    return (
        <ul className="channel-container">
            {
                channels.map((channel) => {
                    return (
                        <>
                            <li
                                key={channel.name}
                                onClick={() => changeClickStatus(channel.id)}
                                className='channel-list'
                            >
                                <Link key={channel.id} to={`${match.url}/channels/${channel.id}`} className='channel-name'>
                                    {" "}
                                    {channel.name}
                                </Link>
                            </li>
                            {clickedId === channel.id ? <AddChannelMember channelId={channel.id} /> : null}
                            { clickedId === channel.id ? <Chat chatName={channel.name} receiverId={channel.id} receiverClass={'Channel'}/> : null}
                        </>
                    );
                })
            }
        </ul>
    )
}

export default ChannelList