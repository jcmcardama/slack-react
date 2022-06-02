import { postAddChannelMember } from '../api/api-add-channelMember.js'
import { userIdByEmail } from '../api/api-users'
import { useState } from 'react'

const AddChannelMember = ({ channelId }) => {
  const [memberEmail, setMemberEmail] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    const trimEmail = memberEmail.trim()
    const memberId = await userIdByEmail(trimEmail)
    postAddChannelMember(channelId, memberId)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Member email" onChange={(e) => setMemberEmail(e.target.value)} />
        <button type="submit">Add Member</button>
      </form>
    </>
  )
}

export default AddChannelMember;