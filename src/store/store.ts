import { configureStore } from '@reduxjs/toolkit';

import { rickmortyApi } from './rickmortyApi';

export const store = configureStore({
  reducer: {
    [rickmortyApi.reducerPath]: rickmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickmortyApi.middleware),
});
