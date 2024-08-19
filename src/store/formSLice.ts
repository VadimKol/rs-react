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
};

export const formSLice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (_, action: PayloadAction<FormInfo>) => action.payload,
  },
});

export const { updateForm } = formSLice.actions;

const selectFormInfo = (state: RootState): FormInfo => state.form;

export const useFormInfo = (): FormInfo => useSelector(selectFormInfo);
