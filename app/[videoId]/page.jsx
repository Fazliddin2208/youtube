"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function VideoPage({ params }) {
  const pathname = usePathname();
  console.log(pathname, params);
  return (
    <div>
      <iframe
        width="800"
        height="499"
        src={`https://www.youtube.com/embed/${params?.videoId}?autoplay=1`}
        autoplay
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

    </div>
  );
}
