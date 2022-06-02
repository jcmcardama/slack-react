import { createChannelMembers } from '../api/api-create-channel-members'
import { useState } from 'react'
import { userIdByEmail } from '../api/api-users'

const AddChannel = () => {
  const [channelName, setChannelName] = useState('')
  const [memberEmails, setMemberEmails] = useState('')


  const submitHandler = async (e) => {
    e.preventDefault()
    const rawMemberEmails = memberEmails.split(",");
    const trimMemberEmails = rawMemberEmails.map((string) => string.trim())
    const membersIds = []
    for (let i = 0; i < trimMemberEmails.length; i++) {
      membersIds.push(await userIdByEmail(trimMemberEmails[i]))
    }
    createChannelMembers(channelName, membersIds)
  }

  return (
    <>
      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Channel Name"
          onChange={((e) => setChannelName(e.target.value))} />

        <input
          type="text"
          placeholder="Member's email"
          onChange={((e) => setMemberEmails(e.target.value))} />

        <button type="submit">Add Channel</button>
      </form>
    </>
  )
}

export default AddChannel;