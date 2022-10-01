import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "persist-key",
    storage

}

const persistedReducer = persistReducer(persistConfig, authReducer);
let store = configureStore({
    reducer: {
        auth: persistedReducer
    }
})

let persistor = persistStore(store);

export {store, persistor};




