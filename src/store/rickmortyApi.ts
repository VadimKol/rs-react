import { type Action, type PayloadAction } from '@reduxjs/toolkit';
import { type CombinedState, createApi, type EndpointDefinitions, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { getCharacter, getCharacters } from 'rickmortyapi';

import type { RootState } from './store';

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const rickmortyApi = createApi({
  reducerPath: 'rickmortyApi',
  baseQuery: fakeBaseQuery(),
  extractRehydrationInfo(
    action,
    { reducerPath },
  ): CombinedState<EndpointDefinitions, never, 'rickmortyApi'> | undefined {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }

    return undefined;
  },
  endpoints: (builder) => ({
    getCharacters: builder.query({
      queryFn: async ({ page, character }: { page: number; character: { name: string } }) => {
        try {
          const { data, status, statusMessage } = await getCharacters({ page, name: character.name });

          if (status === 200) {
            return { data: { characters: data.results || [], totalPages: data.info?.pages || 0 } };
          }
          if (status === 404) {
            return { data: { characters: [], totalPages: 0 } };
          }

          throw new Error(statusMessage);
        } catch (error) {
          return { error };
        }
      },
    }),
    getCharacter: builder.query({
      queryFn: async (id: number) => {
        try {
          const { data, status, statusMessage } = await getCharacter(id);

          if (status === 200) {
            return { data };
          }
          if (status === 404) {
            return { data: null };
          }

          throw new Error(statusMessage);
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterQuery,
  util: { getRunningQueriesThunk },
} = rickmortyApi;

export const { endpoints } = rickmortyApi;
