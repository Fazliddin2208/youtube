"use client";

import React, { useEffect, useState } from "react";
import content from "./../content.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";

export default function VideoComponent({ video }) {
  useEffect(() => {
    checkPublishetTime();
    getChannelInfo();
  }, []);

  const [channelInfo, setChannelInfo] = useState({});

  const getChannelInfo = async () => {
    await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video?.snippet?.channelId}&key=AIzaSyB9WvaJK1VfXypXIT9KBUE0yDBQZ3SRTA8`
      )
      .then((res) => {
        res.data.items?.map((channel) => {
          setChannelInfo({
            ...channelInfo,
            channelTitle: channel?.snippet?.title,
            channelLogo: channel?.snippet?.thumbnails?.default?.url,
            channelLogoWidth: channel?.snippet?.thumbnails?.default?.width,
            channelLogoHeight: channel?.snippet?.thumbnails?.default?.height,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [publishDate, setPublishDate] = useState();

  const checkPublishetTime = () => {
    let pdate = video?.snippet?.publishedAt?.split("T");
    setPublishDate(pdate[0]);
  };

  return (
    <div className={content.videos__cart}>
      <Link href={`/${video?.id}`} className={content.videos__cart__header}>
        <Image
          src={video?.snippet?.thumbnails?.high?.url}
          alt="video"
          width={video?.snippet?.thumbnails?.high?.width}
          height={video?.snippet?.thumbnails?.high?.height}
          quality={100}
          priority
        />
      </Link>
      <div className={content.videos__cart__body}>
        <div className={content.videos__cart__logo}>
          {channelInfo?.channelLogo && (
            <Image
              src={channelInfo?.channelLogo}
              alt="video"
              width={channelInfo?.channelLogoWidth}
              height={channelInfo?.channelLogoHeight}
              quality={100}
            />
          )}
        </div>
        <div className={content.videos__cart__data}>
          <Link href={`/${video?.id}`}>
            <h3>{video?.snippet?.localized?.title}</h3>
          </Link>
          <Link href={"/"}>{channelInfo?.channelTitle}</Link>
          <p>{publishDate}</p>
        </div>
        <div className={content.videos__cart__action}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
}
