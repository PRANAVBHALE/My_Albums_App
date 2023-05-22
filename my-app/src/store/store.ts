import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from '@reduxjs/toolkit'
import { albumsApi } from "../services/albumsApi";
import { usersApi } from "../services/usersApi";

let rootReducer = combineReducers(
  {
    [albumsApi.reducerPath]: albumsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  }
) 

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        albumsApi.middleware,
        usersApi.middleware,
      ),
  });
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
//setupListeners(setupStore({}).dispatch);