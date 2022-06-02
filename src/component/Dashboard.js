import { useState, useEffect } from "react";
import {retrieveMessage} from "../api/api-retrieve-messages.js"
import ListMessage from "./ListMessage.js";
import ChatTitle from "./ChatTitle.js";

const Dashboard = (prop) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function listMessage(receiverId, receiverClass){
            const messageArray = await retrieveMessage(receiverId, receiverClass);
            setData(messageArray);
        }
        listMessage(prop.receiverId, prop.receiverClass);
    });

    return(
        <div>
            <ChatTitle data={data} id={prop.receiverId} class={prop.receiverClass}/>
            <ListMessage data={data}/>
        </div>
    );
};
export default Dashboard;
