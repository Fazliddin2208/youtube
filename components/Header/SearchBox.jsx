"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import head from "./header.module.scss";
import {
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SearchBox({ context }) {
    console.log(context);
    const path = usePathname()
    console.log(path);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handlePickQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleClickSearch = () => {
    console.log(query);
    query && router.push(`/search?q=${query}`, { scroll: false });
  };

  const handleKeyDown = (event, query) => {
    if (event.key == "Enter") {
      router.push(`/search?q=${query}`, { scroll: false });
      console.log('ishla');
    }
  };
  return (
    <div className={head.header__search}>
      <div className={head.header__search__box}>
        <input
          type="search"
          placeholder="Search..."
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
  );
}
