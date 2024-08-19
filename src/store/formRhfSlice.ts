import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { type FormInfo } from '@/common/types';

import { type RootState } from './store';

const initialState: FormInfo = {
  name: null,
  age: null,
  email: null,
  password: null,
  confirmPassword: null,
  gender: null,
  country: null,
  tc: null,
  image: null,
  strength: '0',
};

export const formRhfSLice = createSlice({
  name: 'formRhf',
  initialState,
  reducers: {
    updateFormRhf: (_, action: PayloadAction<FormInfo>) => action.payload,
  },
});

export const { updateFormRhf } = formRhfSLice.actions;

const selectFormRhfInfo = (state: RootState): FormInfo => state.formRhf;

export const useFormRhfInfo = (): FormInfo => useSelector(selectFormRhfInfo);
