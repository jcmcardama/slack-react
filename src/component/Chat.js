import { useState } from "react";
import { sendMessage } from "../api/api-send-message.js"
// import { userIdByEmail } from "../api/api-users"

const Chat = (prop) => {
    const [message, setMessage] = useState("")
    // const [receiverEmail, setReceiverEmail] = useState("")

    const messageChangeHandler = (event) => {
        setMessage(event.target.value)
    }

    // const receiverChangeHandler = (event) => {
    //     return setReceiverEmail(event.target.value)
    // }

    // const submitHandler = async (event) => {
    //     event.preventDefault();
    //     let receiverId = await userIdByEmail(receiverEmail)
    //     sendMessage(receiverId, message)
    //     setMessage("")
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        sendMessage(prop.receiverId, prop.receiverClass, message)
        setMessage("")
    }

    return (
        <div>
            <h2>Send Message</h2>
            <form onSubmit={submitHandler}>
                {/* <label htmlFor="receiver-email">To:</label>
                <input type="text" name="receiver-email" onChange={receiverChangeHandler} /> */}
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