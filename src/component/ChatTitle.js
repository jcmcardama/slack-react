import { useState, useEffect } from "react";
import {fetchUserDetails} from "../api/api-users.js"

const ChatTitle = (prop) => {
    const [receiverChat, setReceiverChat] = useState(""); 
    const items = prop.data;

    useEffect(() => {
        async function userIdById(id){
            const usersArray = await fetchUserDetails(id);
            let user = usersArray.data.filter(userData => {
                return userData.id === id
            });
            setReceiverChat(user[0].uid);
        }
        userIdById(prop.id);
    });

    return (
        <div>
            {
                items.data !== undefined ? (prop.class === "Channel" ? (<h1>{items.data[0].receiver.name}</h1>) : (<h1>{receiverChat}</h1>)) : (<h1>Chat Title</h1>)
            }
        </div>
    );
};
export default ChatTitle;