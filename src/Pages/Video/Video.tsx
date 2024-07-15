//import React from 'react'
import './Video.css'
import PlayVideo from '../PlayVideo/PlayVideo'
import Recommended from '../Recommended/Recommended'

function Video() {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  )
}

export default Video