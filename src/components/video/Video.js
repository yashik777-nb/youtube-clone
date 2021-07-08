import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/F6GIp8uj1fg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlHS-8Av9KbAn2506ahZVM_sHxDg"
          alt=""
        ></img>
        <span>05.43sec</span>
      </div>
      <div className="video__title">Create App in 5min. #CreatedByYash</div>
      <div className="video_details">
        <span>
          <AiFillEye size={20} />
          5mn Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLT_xlxcSj7iW0QFKHH8wM-BlO1NUr7pCa_hrt00=s48-c-k-c0x00ffffff-no-rj"
          alt=""
        ></img>
        <p>Crazy Channel</p>
      </div>
    </div>
  );
}

export default Video;
