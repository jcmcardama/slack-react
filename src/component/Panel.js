import React, { useState } from 'react'
import { 
  FiAtSign, 
  FiMoreVertical, 
  FiPlus, 
  FiEdit, 
  FiChevronDown } from 'react-icons/fi'
import {
  IoChatbubblesOutline,
  IoChevronForwardOutline,
  IoChevronDownOutline,
} from 'react-icons/io5'
import { BsChatText } from 'react-icons/bs'
import { useHistory, /*useParams,*/ NavLink, Link } from 'react-router-dom'
import Channels from "./Channels"
import RecentDirectMessages from "./RecentDirectMessages"
import RecentDmList from './RecentDmList'
import AddChannel from './AddChannel'

const Panel = () => {

  let navigate = useHistory()
  // let { uid } = useParams()

  const [showChannelList, setShowChannelList] = useState(true)
  const [showRecentDmList, setShowRecentDmList] = useState(true)


  // CREATE A FUNCTION TO DISPLAY CHANNEL LIST
  // const displayChannels = channels
  

  const staticList = [
    { title: 'Threads', icon: <BsChatText /> },
    { title: 'All DMs', icon: <IoChatbubblesOutline /> },
    { title: 'Mentions & reactions', icon: <FiAtSign /> },
    { title: 'More', icon: <FiMoreVertical /> },
  ]

  return (
    <>
        <Channels />
        <RecentDirectMessages />

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
            {staticList.map((element, index) => {
              return (
                <li className="menu-options" key={index}>
                  {element.icon}
                  <NavLink to={'/*'}>
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
                <div className="sidebar-add-icon">
                  <FiPlus onClick={AddChannel} 
                  title='channel-add-btn'/>
                </div>
              </div>
              {showChannelList ? (
                <ul className="channels">{/* displayChannels */}</ul>
              ) : null}
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