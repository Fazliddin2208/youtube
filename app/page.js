"use client"

import Content from "@/components/Content/Content";
// import { initializeStore } from "@/redux/configureStore";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

export default function Home() {
  // const { store, persistor } = initializeStore;
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
        <main>
          <Content />
        </main>
      // </PersistGate>
      // </Provider>
  );
}
