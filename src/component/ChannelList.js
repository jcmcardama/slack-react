
import { channels } from "../api/api-channels";
import ItemChannel from "./ItemChannel";
import { useState } from "react";


const ChannelList = () => {
    const [clickedID, setClickID] = useState(undefined)
    return (
        <ul>
            {channels.map((channel) => {
                return (
                    <ItemChannel clickedId={clickedID} changeClickStatus={setClickID} channelId={channel.id} channelName={channel.name}/>
                );
            })}
        </ul>
    )
}

export default ChannelList