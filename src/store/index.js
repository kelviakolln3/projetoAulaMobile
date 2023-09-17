import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStore from '@react-native-async-store/async-storage';

import Reducers from '../reducers';
import persistReducer from 'redux-persist/es/persistReducer'; 

const persistConfig = {
    key: 'aulamobile',
    store: AsyncStore,
    timeout: 0
};

const persistReducer = persistReducer(persistConfig, Reducers);

export const Store = createStore(persistReducer);
export const Persistor = persistStore(Store);