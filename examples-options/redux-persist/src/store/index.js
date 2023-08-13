import {createStore} from "redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import {rootReducer} from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    // wishList: ['positions', 'filters'],
    // blacklist: ['positions', 'filters'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export { store };

export const persistor = persistStore(store);