import {useState} from "react";
import {sendMessage} from "../api/api-send-message.js"

const SendMessage = () => {
    const [message, setMessage] = useState("");

    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        sendMessage(1, message)
      };

    return(
        <div>
            <h1>Send Message</h1>
            <form onSubmit={submitHandler}>
                <input
                type="text"
                placeholder="Channel Name"
                value={message}
                onChange={messageChangeHandler} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default SendMessage;