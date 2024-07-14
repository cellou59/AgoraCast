import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Home({sidebarOpen} : {sidebarOpen: boolean}) {
  return (
    <>
    <Sidebar sidebarOpen={sidebarOpen} />
    </>
  )
}

export default Home