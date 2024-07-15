//import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

function PlayVideo() {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best channel to learn that help you to be a web developer</h3>
      <div className="play-video-info">
        <p>10k views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>

          <span>
            <img src={dislike} alt="" /> 25
          </span>

          <span>
            <img src={share} alt="" />Share
          </span>

          <span>
            <img src={save} alt="" />Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div className="">
          <p>Greatstack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Lorem ipsum dolor sit amet consectet?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          quisquam.
        </p>
        <hr />
        <h3>130 comments</h3>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              John Doe
              <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quisquam.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>25</span>
              <img src={dislike} alt="" />
              <span>5</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              John Doe
              <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quisquam.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>25</span>
              <img src={dislike} alt="" />
              <span>5</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              John Doe
              <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quisquam.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>25</span>
              <img src={dislike} alt="" />
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
