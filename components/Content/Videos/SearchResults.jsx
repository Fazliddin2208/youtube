"use client";

import { closeLoader } from "@/redux/actions/loaderActions";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchResults({ results }) {
  console.log(results, 'shu');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const loader = useSelector((state) => state.loader);

  const dispatch = useDispatch();
  const unLoad = () => {
    dispatch(closeLoader());
  };

  useEffect(() => {
    unLoad();
    console.log(results);
    setTimeout(() => {
      unLoad();
    }, 3000);
  }, [results]);

  const getVideoDetails = async() => {
    results?.map(item=>{
      axios.get(`${apiUrl}/videos?id=${item?.id?.videoId}&key=${apiKey}`)
      .then(res=>{
        console.log(res, 'res');
      })
      .catch(err=>{
        console.log(err, 'err');
      })
    })
  }

  useEffect(()=>{
    getVideoDetails()
  },[])

  //   useEffect(() => {
  //     getResults()
  //   },[]);

  //   const getResults = async () => {
  //     await axios
  //       .get(`${apiUrl}/search?q=code&key=${apiKey}`)
  //       .then((res) => {
  //         console.log(res.data, "shu");
  //         return res.items;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // "https://i.ytimg.com/vi/uHb7au6Gmls/mqdefault.jpg"
  return (
    <div>
      SearchResults
      {results?.map((result, index) => (
        <Link href={`/video/${result?.id?.videoId}`} key={index}>
          <Image
            src={`https://i.ytimg.com/vi/${result?.id?.videoId}/mqdefault.jpg`}
            alt="img"
            width={300}
            height={200}
            quality={100}
          />
        </Link>
      ))}
    </div>
  );
}
