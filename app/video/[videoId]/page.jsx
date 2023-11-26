import React from "react";
import VideoPage from "@/components/Content/Videos/VideoPage";
import axios from "axios";

async function getVideoData(params) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const result = await axios
    .get(
      `${apiUrl}/videos?id=${params}&key=${apiKey}`
    )
    .then((res) => {
      return res.data.items;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
}

export default async function Video({ params }) {
  const video = await getVideoData(params.videoId)
  return <VideoPage params={params} video={video?.items} />;
}
