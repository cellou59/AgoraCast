import { useParams } from 'react-router-dom'
import './Video.css'
import PlayVideo from '../PlayVideo/PlayVideo'
import Recommended from '../Recommended/Recommended'

function Video() {
  const { videoId, categoryId } = useParams<{ videoId: string; categoryId: string }>();

  if (!videoId || !categoryId) {
    return <div>Error: Missing video or category ID</div>;
  }

  return (
    <div className="play-container" >
      <PlayVideo  videoId={videoId} />
      <Recommended  categoryId={categoryId}/>
    </div>
  )
}

export default Video