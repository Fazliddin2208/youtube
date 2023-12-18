"use client";

import React, { useEffect, useState } from "react";
import content from "./../content.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loaders/Loader";
import { closeLoader, initLoader } from "@/redux/actions/loaderActions";

export default function VideoComponent({ video }) {

  // console.log(video);

  const dispatch = useDispatch()
  const loader = useSelector((state) => state.loader);

  useEffect(() => {
    checkPublishetTime();
    getChannelInfo();
    checkViews(video?.statistics?.viewCount);
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

  const [viewCount, setViewCount] = useState(0);

  const checkViews = (count) => {
    if (count >= 10000000) {
      setViewCount(`${(count / 10000000).toFixed(1)} B`);
    } else if (count >= 1000000) {
      setViewCount(`${(count / 1000000).toFixed(1)} M`);
    } else if (count >= 1000) {
      setViewCount(`${(count / 1000).toFixed(1)} K`);
    } else {
      setViewCount(count);
    }
  };

  const load = () => {
    dispatch(initLoader());
  };

  const unLoad = () => {
    dispatch(closeLoader());
  };

  useEffect(()=>{
    unLoad()
  },[])


  return (
    <>
    {loader && <Loader />}
    <div className={content.videos__cart}>
      <Link href={`/video/${video?.id}`} className={content.videos__cart__header}>
        <Image
          src={video?.snippet?.thumbnails?.medium?.url}
          alt="video"
          onClick={load}
          width={video?.snippet?.thumbnails?.medium?.width}
          height={video?.snippet?.thumbnails?.medium?.height}
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
          <Link href={`/video/${video?.id}`} onClick={load}>
            <h3>{video?.snippet?.localized?.title}</h3>
          </Link>
          <Link href={"/"}>
            <p>{channelInfo?.channelTitle}</p>
          </Link>
          <p>
            {viewCount} views <FontAwesomeIcon icon={faCircle} /> {publishDate}
          </p>
        </div>
        <div className={content.videos__cart__action}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
    </>
  );
}
