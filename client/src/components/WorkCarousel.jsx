import { workslides } from "../constants";
import { useEffect, useRef, useState } from "react";

const WorkCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {}, [videoId, startPlay]);

  return (
    <>
      <div className="work-carousel">
        {workslides.map((contents, index) => (
          <div key={contents.id} id="slider">
            <div className="work-carousel-container">
              <div className="work-carousel-box">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={contents.video} type="video/mp4" />
                </video>
              </div>
              <div className="demo-text">
                {contents.textLists.map((text) => (
                  <p key={text} className="text">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkCarousel;
