import {createChannelMembers} from '../api/api-create-channel-members'
import { useState } from 'react'

const AddChannel = () => {
  const [channelName, setChannelName] = useState('')
  const [memberId, setMemberId] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    createChannelMembers(channelName, memberId)
    console.log(memberId)
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Channel Name" onChange={((e) => setChannelName(e.target.value))}/>
        <input type="text" placeholder='Members IDs' onChange={((e) => setMemberId(e.target.value))}/>
        <button type="submit">Add Channel</button>
      </form>
    </>
  )
}

export default AddChannel;