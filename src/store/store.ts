import { configureStore } from '@reduxjs/toolkit';

import { formSLice } from './formSLice';

export const store = configureStore({ reducer: { form: formSLice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
