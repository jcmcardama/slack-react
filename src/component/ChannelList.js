
import { channels } from "../api/api-channels";
import ItemChannel from "./ItemChannel";
import { useState } from "react";


const ChannelList = () => {
    const [clickedID, setClickID] = useState(undefined)
    let keygen = 0;
    return (
        <ul className="channel-container">
            {channels.map((channel) => {
                return (
                    <ItemChannel key={keygen++}clickedId={clickedID} changeClickStatus={setClickID} channelId={channel.id} channelName={channel.name}/>
                );
            })}
        </ul>
    )
}

export default ChannelList