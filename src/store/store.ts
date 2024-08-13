import { configureStore } from '@reduxjs/toolkit';

import { favoritesSLice } from './favoritesSlice';

export const makeStore = () =>
  configureStore({
    reducer: { favorites: favoritesSLice.reducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
