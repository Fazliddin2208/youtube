"use client";

import React from "react";
import { initializeStore } from "@/redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

export default function Providers({ children }) {
  const { store, persistor } = initializeStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="content">
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            <Header />
            {children}
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
