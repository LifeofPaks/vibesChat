import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DP from '../../src/images/user1.jpeg'

const Search = () => {
  return (
    <div className='search'>
      <div className="inputGroup">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
        <input type="text" placeholder='Search'/>
      </div>

      <div className="userChat">
        <img src={DP} alt="display picture" className="dp" />
        <div className="userInfo">
          <div className="title">
            <span className="username">Nelly</span>
            <span className="timeStamp">01:22AM</span>
          </div>
          <p className="chatPreview">
            Hello!
          </p>
        </div>
      </div>

      <div className="userChat">
        <img src={DP} alt="display picture" className="dp" />
        <div className="userInfo">
          <div className="title">
            <span className="username">Nelly</span>
            <span className="timeStamp">01:22AM</span>
          </div>
          <p className="chatPreview">
            Hello!
          </p>
        </div>
      </div>

      <div className="userChat">
        <img src={DP} alt="display picture" className="dp" />
        <div className="userInfo">
          <div className="title">
            <span className="username">Nelly</span>
            <span className="timeStamp">01:22AM</span>
          </div>
          <p className="chatPreview">
            Hello!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Search