// import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed.tsx/Feed'

function Home({sidebarOpen} : {sidebarOpen: boolean}) {
  return (
    <>
    <Sidebar sidebarOpen={sidebarOpen} />
    <div className={`container ${sidebarOpen ? "" :"large-container"}`}>
      <Feed />
    </div>
    </>
  )
}

export default Home