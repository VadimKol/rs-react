import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { favoritesSLice } from './favoritesSlice';
import { rickmortyApi } from './rickmortyApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      favorites: favoritesSLice.reducer,
      [rickmortyApi.reducerPath]: rickmortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickmortyApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
