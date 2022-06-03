import CloseButton from './CloseButton'
import { useState } from 'react'
import {userIdByEmail} from '../api/api-users'
import Chat from './Chat'

const AddMessage = ({addChannel, changeAddChannel, clickedId, changeClickStatus}) => {
    const [email, setEmail] = useState('')
    let userId

    const submitHandler = async (e) => {
        e.preventDefault()
        userId = await userIdByEmail(email)
        changeClickStatus(userId)
        changeAddChannel(false)
    }

    return (
        <>
            <form onSubmit={submitHandler} className="addChannelForm">
                <input
                    type="text"
                    placeholder="Email"
                    onChange={((e) => setEmail(e.target.value))} />
                <CloseButton addChannel={addChannel} changeAddChannel={changeAddChannel} />
            </form>
            
            {clickedId === userId? <Chat chatName={email.substring(0, email.lastIndexOf("@"))} receiverId={userId} receiverClass={'User'}/> : null}
        </>
    )
}

export default AddMessage