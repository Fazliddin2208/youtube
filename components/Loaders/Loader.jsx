import React from "react";
import style from './loader.module.scss'

export default function Loader() {
  return (
    <div className={style.wrapper}>
      <span className={style.loader}></span>
    </div>
  );
}
