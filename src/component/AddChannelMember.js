import { postAddChannelMember } from '../api/api-add-channelMember.js'
import { userIdByEmail } from '../api/api-users'
import { useState } from 'react'
// import CloseButton from './CloseButton.js'

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
      <form onSubmit={submitHandler} className="member-form">
        <input type="text" placeholder="Member email" onChange={(e) => setMemberEmail(e.target.value)} />
        {/* <CloseButton addChannel={addChannel} changeAddChannel={changeAddChannel}/> */}
      </form>
    </>
  )
}

export default AddChannelMember;