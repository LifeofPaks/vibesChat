import React from 'react'
import '../../Styles.scss'
import Sidebar from '../../Components/Sidebar'
import Chat from '../../Components/Chat'
import '../HomePage/Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home