
import { channels } from "../api/api-channels";
import ItemChannel from "./ItemChannel";
import { useState } from "react";


const ChannelList = () => {
    const [clickedID, setClickID] = useState(undefined)
    let keygen = 0;
    return (
        <ul>
            {channels.map((channel) => {
                return (
                    <ItemChannel key={keygen++}clickedId={clickedID} changeClickStatus={setClickID} channelId={channel.id} channelName={channel.name}/>
                );
            })}
        </ul>
    )
}

export default ChannelList