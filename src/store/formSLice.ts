import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { type FormInfo } from '@/common/types';

import { type RootState } from './store';

export const initialState: FormInfo[] = [];

export const formSLice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FormInfo>) => {
      state.push(action.payload);
    },
  },
});

export const { updateForm } = formSLice.actions;

const selectFormInfo = (state: RootState): FormInfo[] => state.form;

export const useFormInfo = (): FormInfo[] => useSelector(selectFormInfo);
