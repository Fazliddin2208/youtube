"use client"

import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";

const allReducers = combineReducers({
  loader: loaderReducer,
});

export default allReducers;
