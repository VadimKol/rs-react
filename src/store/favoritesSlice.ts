/* import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { type Character } from 'rickmortyapi';

import { type RootState } from './store';

const initialState: Character[] = [];

export const favoritesSLice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Character>) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Character>) =>
      state.filter((character) => character.id !== action.payload.id),
    clearFavorites: () => [],
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSLice.actions;

const selectFavorites = (state: RootState): Character[] => state.favorites;

const isFavorite = (state: RootState, character?: Character): boolean =>
  state.favorites.some((favorite) => favorite.id === character?.id);

export const useFavorites = (): Character[] => useSelector(selectFavorites);

export const useIsFavorite = (character?: Character): boolean =>
  useSelector((state: RootState) => isFavorite(state, character));
 */
