import {legacy_createStore as createStore} from 'redux'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import allReducers from "./reducers";

const persistConfig = {
    key: 'clonedata',
    storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const initializeStore = () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};