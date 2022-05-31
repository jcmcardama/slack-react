import {useState} from "react";
import {createChannelMembers} from "../api/api-create-channel-members"

const CreateChannelMembers = () => {
    const [channelName, setChannelName] = useState("");
    const userId = JSON.parse(localStorage.getItem("userId"));

    const channelNameChangeHandler = (event) => {
        setChannelName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        createChannelMembers(channelName, [userId.toString()]);
    };

    return(
        <div>
            <h1>Create Channel with Members</h1>
            <form onSubmit={submitHandler}>
                <input
                type="text"
                placeholder="Channel Name"
                value={channelName}
                onChange={channelNameChangeHandler} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default CreateChannelMembers;