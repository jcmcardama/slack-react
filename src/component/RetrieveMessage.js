import {retrieveMessage} from "../api/api-retrieve-message.js"

const RetrieveMessage = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const submitHandler = (event) => {
        event.preventDefault();
        retrieveMessage(userId);
      };

    return(
        <div>
            <h1>Retrieve Message</h1>
            <form onSubmit={submitHandler}>
                <button type="submit">Retrieve Message</button>
            </form>
        </div>
    );
};
export default RetrieveMessage;
