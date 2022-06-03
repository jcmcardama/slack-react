import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FiEdit,
  FiChevronDown,
  FiAtSign,
  FiMoreVertical
} from 'react-icons/fi'
import { BsChatText, BsHash } from 'react-icons/bs'
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
  IoChatbubblesOutline
} from 'react-icons/io5'
import ChannelList from "./ChannelList"
import AddButton from './AddButton'
import RecentDmList from './RecentDmList'
import AddChannel from './AddChannel'
import AddMessage from './AddMessage'

const Panel = () => {
  // let navigate = useHistory()
  // let { uid } = useParams()

  const [showChannelList, setShowChannelList] = useState(false)
  const [showRecentDmList, setShowRecentDmList] = useState(false)
  const [addChannel, setAddChannel] = useState(false)
  const [addDM, setAddDM] = useState(false)
  const [clickedID, setClickID] = useState(undefined)

  const staticList = [
    { title: 'Threads', icon: <BsChatText /> },
    { title: 'All DMs', icon: <IoChatbubblesOutline /> },
    { title: 'Mentions & reactions', icon: <FiAtSign /> },
    { title: 'More', icon: <FiMoreVertical /> },
  ]


  // CREATE A FUNCTION TO DISPLAY CHANNEL LIST
  // const displayChannels = channels
  return (
    <>  
      <div className='panel'>
        <nav className="sidebar-container">
          {/* Header */}
          <div className="sidebar-header">
            <button className="team-name-button">
              Avion School <FiChevronDown />
            </button>
              <div className="compose-button">
                <FiEdit />
              </div>
          </div>

          {/* Main Nav */}
          <ul className="sidebar-menu">
            {staticList.map((element, index) => {
            return (
              <li className="menu-options" key={index}>
                {element.icon}
                <NavLink to={'*'}>
                  <span>{element.title}</span>
                </NavLink>
              </li>
            )
          })}

            <li className="channels-dropdown">
              {/* CHANNEL LIST DROPDOWN */}
              <div className="channels-dropdown-header">
                {showChannelList ? (
                  <IoChevronDownOutline
                    onClick={() => setShowChannelList(!showChannelList)}
                  />
                ) : (
                  <IoChevronForwardOutline
                    onClick={() => setShowChannelList(!showChannelList)}
                  />
                )}
                <span>Channels</span>
                <AddButton addChannel={addChannel} changeAddChannel={setAddChannel} />
              </div>
              {addChannel ? <AddChannel addChannel={addChannel} changeAddChannel={setAddChannel} /> : null}
              {showChannelList ? <ChannelList clickedId={clickedID} changeClickStatus={setClickID}/> : null}
            </li>

            {/* DIRECT MESSAGES DROPDOWN */}
            <li className="direct-messageslist-dropdown">
              <div className="direct-messageslist-dropdown-header">
                {showRecentDmList ? (
                  <IoChevronDownOutline
                    onClick={() => setShowRecentDmList(!showRecentDmList)}
                  />
                ) : (
                  <IoChevronForwardOutline
                    onClick={() => setShowRecentDmList(!showRecentDmList)}
                  />
                )}
                <span>Direct Messages</span>
                <AddButton addChannel={addDM} changeAddChannel={setAddDM} />
              </div>
              {addDM ? <AddMessage addChannel={addDM} changeAddChannel={setAddDM} clickedId={clickedID} changeClickStatus={setClickID}  /> : null}
              {showRecentDmList ? <RecentDmList clickedId={clickedID} changeClickStatus={setClickID} /> : null}
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Panel