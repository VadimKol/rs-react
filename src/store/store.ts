import { configureStore } from '@reduxjs/toolkit';

import { favoritesSLice } from './favoritesSlice';
import { rickmortyApi } from './rickmortyApi';

export const store = configureStore({
  reducer: {
    favorites: favoritesSLice.reducer,
    [rickmortyApi.reducerPath]: rickmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
