import { useState } from "react";
import {retrieveMessage} from "../api/api-retrieve-messages.js"

const Dashboard = () => {
    const [receiverId, setReceiverId] = useState("");
    const [data, setData] = useState([]);

    const receiverChangeHandler = (event) => {
        setReceiverId(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        retrieveMessage(receiverId, "Channel");
        setData(JSON.parse(localStorage.getItem("dataMessages")));
    };

    const ListMessage = () => {
        return <>{data.map((item, index) => (
          <div key={index}>
            {item.body}
          </div>
        ))}</>;
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
            <ListMessage />
        </div>
    );
};
export default Dashboard;
