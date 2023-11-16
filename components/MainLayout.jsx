"use client";

import React from "react";
import { initializeStore } from "@/redux/configureStore";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function MainLayout({ children }) {
  const { store, persistor } = initializeStore;
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  return (
    <>
    {/* <Provider store={store}>
      <PersistGate persistor={persistor}> */}
        {/* {children} */}
        <div className="content">
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            <Header />
            {/* <MainLayout children={children} /> */}
            {children}
          </div>
        </div>
      {/* </PersistGate>
    </Provider> */}
    </>
  );
}
