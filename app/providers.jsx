"use client"

import React from "react";
import { initializeStore } from "@/redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
    const { store, persistor } = initializeStore;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
