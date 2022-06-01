import { useState } from "react";
import {retrieveMessage} from "../api/api-retrieve-messages.js"
import ListMessage from "./ListMessage.js";

const Dashboard = () => {
    const [receiverId, setReceiverId] = useState("");
    const [data, setData] = useState([]);

    const receiverChangeHandler = (event) => {
        setReceiverId(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        retrieveMessage(receiverId, "User");
        setData(JSON.parse(localStorage.getItem("dataMessages")));
    };

    return(
        <div>
            <h1>Retrieve Message</h1>
            <form onSubmit={submitHandler}>
                <input
                        type="textarea"
                        placeholder="Receiver id"
                        value={receiverId}
                        onChange={receiverChangeHandler}
                />
                <button type="submit">Retrieve Message</button>
            </form>
            <ListMessage data={data}/>
        </div>
    );
};
export default Dashboard;
