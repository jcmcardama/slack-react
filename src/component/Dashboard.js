import { useState } from "react";
import {listMessage} from "../api/api-retrieve-messages.js"
import ListMessage from "./ListMessage.js";
import Chat from "./Chat.js";

const Dashboard = () => {
    const [receiverId, setReceiverId] = useState("");
    const [data, setData] = useState([]);

    const receiverChangeHandler = (event) => {
        setReceiverId(event.target.value)
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        setData(await listMessage(receiverId, "Channel"));
    };

    return(
        <div>
            <ChatTitle data={data}/>
            <form onSubmit={submitHandler}>
                <input
                        type="textarea"
                        placeholder="Receiver id"
                        value={receiverId}
                        onChange={receiverChangeHandler}
                />
                <button type="submit">Retrieve Message</button>
            </form>
            <Chat />
            <ListMessage data={data}/>
        </div>
    );
};
export default Dashboard;
