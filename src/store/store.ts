import { configureStore } from '@reduxjs/toolkit';

import { countriesLice } from './countriesSlice';
import { formRhfSLice } from './formRhfSlice';
import { formSLice } from './formSLice';

export const store = configureStore({
  reducer: { form: formSLice.reducer, formRhf: formRhfSLice.reducer, countries: countriesLice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
