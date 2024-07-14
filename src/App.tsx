import {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Video from './Pages/Video/Video'

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen}></Navbar>
      <Routes>
        <Route path="/" element={<Home sidebarOpen={sidebarOpen}></Home>} />
        <Route path="/video/:categoryId/:videoId" element={<Video></Video>} />
      </Routes>
    </>
    
  )
}

export default App