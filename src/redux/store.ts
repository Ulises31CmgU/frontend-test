import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import rootSaga from "./root.sagas";
import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middlewares],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
