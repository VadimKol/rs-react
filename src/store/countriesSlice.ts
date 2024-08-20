import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { countries } from '@/common/countries';

import { type RootState } from './store';

export const countriesLice = createSlice({
  name: 'countries',
  initialState: countries,
  reducers: {
    addCountry: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { addCountry } = countriesLice.actions;

export const selectCountries = (state: RootState): string[] => state.countries;

export const useCountries = (): string[] => useSelector(selectCountries);
