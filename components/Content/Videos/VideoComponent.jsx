"use client"

import React from "react";
import content from "./../content.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function VideoComponent({ video }) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const msecond = date.getMilliseconds()

    const timeNow = `${year}-${month}-${day}T${hour}:${minute}:${second}-${msecond}:00`

    const now = new Date(timeNow)
    console.log(now, timeNow);
    // console.log(video, date.getUTCDate());
  return (
    <div className={content.videos__cart}>
      <div className={content.videos__cart__header}>
        <Image
          src={video?.snippet?.thumbnails?.high?.url}
          alt="video"
          width={video?.snippet?.thumbnails?.high?.width}
          height={video?.snippet?.thumbnails?.high?.height}
          quality={100}
          priority
        />
      </div>
      <div className={content.videos__cart__body}>
        <div className={content.videos__cart__logo}>
          {/* <Image src={""} alt="video" width={100} height={100} quality={100} /> */}
        </div>
        <div className={content.videos__cart__data}>
          <h3>{video?.snippet?.title}</h3>
          <p>{video?.snippet?.channelTitle}</p>
          <p>{video?.snippet?.publishedAt}</p>
        </div>
        <div className={content.videos__cart__action}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
}
