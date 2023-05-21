import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from '@reduxjs/toolkit'

import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "../services/albumsApi";

let rootReducer = combineReducers(
  {
    [albumsApi.reducerPath]: albumsApi.reducer,
  }
) 

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        albumsApi.middleware,
      ),
  });
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']