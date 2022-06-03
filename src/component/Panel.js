import React, { useState } from 'react'
import {
  FiEdit,
  FiChevronDown
} from 'react-icons/fi'
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
} from 'react-icons/io5'
import ChannelList from "./ChannelList"
import AddButton from './AddButton'
import { Link } from 'react-router-dom'
import RecentDmList from './RecentDmList'
import AddChannel from './AddChannel'
import Chat from './Chat'

const Panel = () => {
  // let navigate = useHistory()
  // let { uid } = useParams()

  const [showChannelList, setShowChannelList] = useState(false)
  const [showRecentDmList, setShowRecentDmList] = useState(false)
  const [addChannel, setAddChannel] = useState(false)
  const [addDM, setAddDM] = useState(false)


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
            <Link to={`/chat`}>
              <div className="compose-button">
                <FiEdit />
              </div>
            </Link>
          </div>

          {/* Main Nav */}
          <ul className="sidebar-menu">
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
              {showChannelList ? <ChannelList /> : null}
            </li>

            {/* DIRECT MESSAGES DROPDOWN */}
            <li className="direct-messages-dropdown">
              <div className="direct-messages-dropdown-header">
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
              {showRecentDmList ? <RecentDmList /> : null}
            </li>
          </ul>
        </nav>
        <Chat className="chat"/>
      </div>
    </>
  )
}

export default Panel