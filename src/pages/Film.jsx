import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import FilmList from "./FilmList";

function Film() {
  const { videoName } = useParams();
  const videoRef = useRef(1);
  console.log("dsasa");
  console.log({videoName});
  return (
    <div className="vstack bg-dark text-light">
      <h1 className="py-2">{videoName}</h1>
      <video
        name = "video_screen"
        className="p-3"
        controls
        ref={videoRef}
        type="video/mp4;charset=UTF-8"
        src={`https://video-streaming-390616.lm.r.appspot.com/film/?videoName=${videoName}`}
      ></video>
    </div>
  );
}

export default Film;
