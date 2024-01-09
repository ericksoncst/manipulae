import {  configureStore } from '@reduxjs/toolkit';

import { deezerCoreApi } from './services/deezerCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [deezerCoreApi.reducerPath]: deezerCoreApi.reducer,
    player: playerReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deezerCoreApi.middleware),
});
