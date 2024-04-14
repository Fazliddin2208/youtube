"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import head from "./header.module.scss";
import {
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loaders/Loader";
import { closeLoader, initLoader } from "@/redux/actions/loaderActions";

export default function SearchBox({ context }) {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader);

  const load = () => {
    dispatch(initLoader());
  };

  const unLoad = () => {
    dispatch(closeLoader());
  };

  useEffect(() => {
    unLoad();
  }, []);

  const path = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handlePickQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleClickSearch = () => {
    query && (router.push(`/search?q=${query}`, { scroll: false }), load());
  };

  const handleKeyDown = (event, query) => {
    if (event.key == "Enter") {
      router.push(`/search?q=${query}`, { scroll: false });
      load();
    }
  };
  return (
    <>
      {loader && <Loader />}
      <div className={head.header__search}>
        <div className={head.header__search__box}>
          <input
            type="search"
            placeholder="Search your video"
            onKeyUp={(e) => handleKeyDown(e, query)}
            onChange={handlePickQuery}
          />
          <button onClick={handleClickSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <FontAwesomeIcon
          className={head.header__search__mic}
          icon={faMicrophone}
        />
      </div>
    </>
  );
}
