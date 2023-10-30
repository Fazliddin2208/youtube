"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export default function Videos() {
  const [items, setItems] = useState([]);

  const getYouTubeData = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=100&chart=mostPopular&key=AIzaSyB9WvaJK1VfXypXIT9KBUE0yDBQZ3SRTA8`
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(items);

  const [id, setId] = useState();

  const getVideoId = (e) => {
    console.log(e);
    setId(e);
  };

  const checkScope = (scopes) => {
    let opener = 0, closer = 0, neutral = 0
    console.log(scopes.split(""), opener, closer);
    scopes.split("").forEach(scope=>{
      scope === "(" ? opener++ : scope === ")" ? closer++ : neutral++
    })

    return opener === closer
  }

  console.log(checkScope("((()))"));

  return (
    <div>

    <button onClick={()=>checkScope('(((())))))')}>Click</button> <br />

      <button onClick={getYouTubeData}>Get Data</button> <br /> <br />
      <hr />
      <ul>
        {items?.map((item) => (
          <Link href={`/${item?.id}`}>
            <li onClick={() => getVideoId(item?.id)}>{item?.snippet?.title}</li>
          </Link>
        ))}
      </ul>
      <br />
    </div>
  );
}
