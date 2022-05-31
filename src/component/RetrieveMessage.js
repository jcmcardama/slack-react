import { retrieveMessage } from "../api/api-retrieve-messages"

const RetrieveMessage = () => {
    const userId = JSON.parse(localStorage.getItem("userId"))

    const submitHandler = (event) => {
        event.preventDefault()
        retrieveMessage(userId) //need to add sender ID here
    }

    return (
        <div>
            <h1>Retrieve Message</h1>
            <form onSubmit={submitHandler}>
                <button type="submit">Retrieve Message</button>
            </form>
        </div>
    )
}
export default RetrieveMessage