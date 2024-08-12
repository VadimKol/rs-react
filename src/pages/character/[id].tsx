import { type ReactNode } from 'react';

import DetailedCard from '@/components/detailed-card/DetailedCard';
import { endpoints, getRunningQueriesThunk } from '@/store/rickmortyApi';
import { wrapper } from '@/store/store';

import Main from '..';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context): Promise<{ props: object }> => {
  const { page, search, id } = context.query;

  await store.dispatch(
    endpoints.getCharacters.initiate({
      page: Math.floor(Number(page)) || 1,
      name: String(search || ''),
    }),
  );

  if (!(/\D/.test(String(id)) || String(id).startsWith('0'))) {
    await store.dispatch(endpoints.getCharacter.initiate(Number(id)));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return { props: {} };
});

export default function WithDetails(): ReactNode {
  return <Main>{(characterID) => <DetailedCard characterID={characterID} />}</Main>;
}
