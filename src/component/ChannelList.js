
import { channels } from "../api/api-channels";
import ItemChannel from "./ItemChannel";


const ChannelList = () => {

    return (
        <ul>
            {channels.map((channel) => {
                return (
                    <ItemChannel channelId={channel.id} channelName={channel.name}/>
                );
            })}
        </ul>
    )
}

export default ChannelList