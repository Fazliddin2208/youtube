"use client"

import React from "react";
import content from "./../content.module.scss";
import { useSelector } from "react-redux";

export default function VideoPage({ params }) {
  const loader = useSelector((state)=>state.loader)

  console.log(loader);
  return (
    <div className={content.video_page}>
    <button>click for loader</button>
    <button>click for unload</button>
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
