import React, { Suspense } from "react";
import Tags from "./Tags";
import Videos from "./Videos/Videos";
import Loader from "../Loaders/Loader";
import Loading from "@/app/loading";
import content from "./content.module.scss";

export default function Content() {
  return (
    <div className={content.content}>
      <Tags />
      <Suspense fallback={<Loading />}>
        <Videos />
      </Suspense>
    </div>
  );
}
