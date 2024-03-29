import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import taskReducer from './tasks/taskSlice'; 

//so basically what happens is, when we dispatch an action in any component file, 
//it goes to redux store and then the store then forwards the action to the corresponding slice reducer based on the action type.
//The slice reducer processes the action and updates its part of the state accordingly, and any components connected to that slice re-render to reflect the new state
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const rootReducer = combineReducers({
    tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
