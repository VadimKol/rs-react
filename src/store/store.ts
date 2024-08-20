import { configureStore } from '@reduxjs/toolkit';

import { countriesLice } from './countriesSlice';
import { formSLice } from './formSLice';

export const store = configureStore({
  reducer: { form: formSLice.reducer, countries: countriesLice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
