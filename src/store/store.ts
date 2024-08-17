import { configureStore } from '@reduxjs/toolkit';

import { favoritesSLice } from './favoritesSlice';

export const store = configureStore({ reducer: { favorites: favoritesSLice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
