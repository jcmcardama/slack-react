import React, { useState} from 'react'
import { 
  FiPlus, 
  FiEdit, 
  FiChevronDown } from 'react-icons/fi'
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
} from 'react-icons/io5'
import { useHistory, Link } from 'react-router-dom'
import ChannelList from "./ChannelList"
import AddButton from './AddButton'
import RecentDmList from './RecentDmList'
import AddChannel from './AddChannel'

const Panel = () => {
  let navigate = useHistory()

  const [showChannelList, setShowChannelList] = useState(false)
  const [showRecentDmList, setShowRecentDmList] = useState(false)
  const [addChannel, setAddChannel] = useState(false)


  // CREATE A FUNCTION TO DISPLAY CHANNEL LIST
  // const displayChannels = channels
  return (
    <>
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
                <AddButton addChannel={addChannel} changeAddChannel={setAddChannel}/>
              </div>
              { addChannel ? <AddChannel addChannel={addChannel} changeAddChannel={setAddChannel} /> : null}
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
                <div className="sidebar-add-icon">
                  <FiPlus onClick={() => navigate(`/Chat`)} />
                </div>
              </div>
              {showRecentDmList ? <RecentDmList /> : null}
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Panel