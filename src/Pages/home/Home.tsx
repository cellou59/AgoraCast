import { useState } from 'react'

import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed.tsx/Feed'

function Home({sidebarOpen} : {sidebarOpen: boolean}) {

  const [category, setCategory] =useState<number>(0)
  return (
    <>
    <Sidebar sidebarOpen={sidebarOpen} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebarOpen ? "" :"large-container"}`}>
      <Feed category={category} />
    </div>
    </>
  )
}

export default Home