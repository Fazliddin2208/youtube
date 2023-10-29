"use client"

import axios from 'axios'
import React from 'react'

export default function Test() {

    const getYouTubeData = async() => {
        await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyB9WvaJK1VfXypXIT9KBUE0yDBQZ3SRTA8`)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <div>
        Test
        <button onClick={getYouTubeData}>Click</button>
    </div>
  )
}
