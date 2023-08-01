import { faEllipsisVertical, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span className="username">Nelly</span>
        <div className="chatIcons">
          <FontAwesomeIcon icon={faVideo}  className='icon'/>
          <FontAwesomeIcon icon={faUserPlus}  className='icon'/>
          <FontAwesomeIcon icon={faEllipsisVertical} className='icon' />

        </div>
      </div>
    </div>
  )
}

export default Chat