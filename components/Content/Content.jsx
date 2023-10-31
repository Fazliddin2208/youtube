import React, { Suspense } from "react";
import Tags from "./Tags";
import Videos from "./Videos/Videos";
import Loader from "../Loaders/Loader";
import Loading from "@/app/loading";

export default function Content() {
  return (
    <div>
      <Tags />
      <Suspense fallback={<Loading />}>
        <Videos />
      </Suspense>
    </div>
  );
}
