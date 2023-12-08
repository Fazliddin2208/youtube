import axios from "axios";
import React from "react";
import VideoComponent from "./VideoComponent";
import content from "./../content.module.scss";

async function getYouTubeDatas() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const result = await axios
    .get(
      `${apiUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&key=${apiKey}`
    )
    .then((res) => {
      return res.data.items;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
}

export default async function Videos() {
  const videos = await getYouTubeDatas();

  return (
    <div>
      <ul className={content.videos}>
        {videos?.map((video) => (
          <VideoComponent key={video?.id} video={video} />
        ))}
      </ul>
      <br />
    </div>
  );
}
