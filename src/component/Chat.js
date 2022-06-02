import { useState } from "react";
import { sendMessage } from "../api/api-send-message.js"
import Dashboard from '../component/Dashboard';

const Chat = (prop) => {
    const [message, setMessage] = useState("")

    const messageChangeHandler = (event) => {
        setMessage(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        sendMessage(prop.receiverId, prop.receiverClass, message)
        setMessage("")
    }

    return (
        <div>
            <Dashboard receiverId={prop.receiverId} receiverClass={prop.receiverClass}/>
            <form onSubmit={submitHandler}>
                <input
                    type="textarea"
                    placeholder="Message..."
                    value={message}
                    onChange={messageChangeHandler}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default Chat