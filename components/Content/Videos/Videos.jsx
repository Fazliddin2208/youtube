import axios from "axios";
import React from "react";
import VideoComponent from "./VideoComponent";
import content from "./../content.module.scss";

async function getYouTubeDatas() {
  const result = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&key=AIzaSyB9WvaJK1VfXypXIT9KBUE0yDBQZ3SRTA8`
  );

  return result.data.items;
}

export default async function Videos() {
  const videos = await getYouTubeDatas();

  return (
    <div>
      <hr />
      <ul className={content.videos}>
        {videos?.map((video) => (
          <VideoComponent key={video?.id} video={video} />
        ))}
      </ul>
      <br />
    </div>
  );
}
