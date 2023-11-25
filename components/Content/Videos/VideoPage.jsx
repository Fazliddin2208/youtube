"use client";

import React, { useEffect } from "react";
import content from "./../content.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeLoader, initLoader } from "@/redux/actions/loaderActions";
import Loader from "@/components/Loaders/Loader";

export default function VideoPage({ params }) {
  const loader = useSelector((state) => state.loader);

  useEffect(() => {
    unLoad();
  }, []);

  const dispatch = useDispatch();

  const load = () => {
    dispatch(initLoader());
  };

  const unLoad = () => {
    dispatch(closeLoader());
  };

  return (
    <>
      {loader && <Loader />}
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
    </>
  );
}
