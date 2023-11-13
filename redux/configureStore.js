import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import allReducers from "./reducers/index";

const persistConfig = {
    key: 'clonedata', // The key under which your Redux state will be saved
    storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const initializeStore = () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};