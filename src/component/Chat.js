import { useState } from "react";
import { sendMessage } from "../api/api-send-message.js"
import Dashboard from '../component/Dashboard';
import {MdSend} from 'react-icons/md'

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
        <div className="chat">
            <Dashboard receiverId={prop.receiverId} receiverClass={prop.receiverClass}/>
            <form className="message-form" onSubmit={submitHandler}>
                <input
                    className="message-area"
                    type="textarea"
                    placeholder="Message..."
                    value={message}
                    onChange={messageChangeHandler}
                />
                <button className="sendBtn" type="submit"><MdSend className='send' /></button>
            </form>
        </div>
    )
}
export default Chat
