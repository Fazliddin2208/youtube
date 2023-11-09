import React from "react";
import content from "./../content.module.scss";

export default function VideoPage({ params }) {
  return (
    <div className={content.video_page}>
      <iframe
        width="800"
        height="499"
        src={`https://www.youtube.com/embed/${params?.videoId}?autoplay=1`}
        autoPlay
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
