import {  configureStore } from '@reduxjs/toolkit';

import { deezerCoreApi } from './services/deezerCore';

export const store = configureStore({
  reducer: {
    [deezerCoreApi.reducerPath]: deezerCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deezerCoreApi.middleware),
});
