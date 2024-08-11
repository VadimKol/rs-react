import { useRouter } from 'next/router';
import { type MouseEventHandler, type ReactNode, useRef, useState } from 'react';

import { Flyout } from '@/components/flyout/Flyout';
import { Results } from '@/components/results/Results';
import { Search } from '@/components/search/Search';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTheme } from '@/hooks/useTheme';
import { endpoints, getRunningQueriesThunk, useGetCharactersQuery } from '@/store/rickmortyApi';
import { wrapper } from '@/store/store';

import styles from './index.module.scss';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context): Promise<{ props: object }> => {
  // const search = context.params?.search;
  const { page, id } = context.query;

  await store.dispatch(
    endpoints.getCharacters.initiate({
      page: Math.floor(Number(page)) || 1,
      character: { name: '' } /* search?.toString() || */,
    }),
  );

  if (id) {
    await store.dispatch(endpoints.getCharacter.initiate(Number(id)));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});

export default function Main({ children }: { children?: (characterID: string) => ReactNode }): ReactNode {
  const { query, push } = useRouter();
  const page = Math.floor(Number(query.page)) || 1;
  const [ls] = useLocalStorage('R&M_search');
  const [character, setCharacter] = useState({ name: ls });
  const searchField = useRef<HTMLInputElement>(null);
  const characterID = query.id || '/';
  // const characterID = typeof window !== 'undefined' ? window.location.pathname.replace('/character/', '') : '/';
  const { data, isFetching: loader, isError, error } = useGetCharactersQuery({ page, character });
  const { characters, totalPages: total } = data || { characters: [], totalPages: 0 };
  const { theme } = useTheme();

  // const router = useRouter();

  // console.log(router, characterID, page);

  if (isError) {
    throw error;
  }

  /*   if (characterID !== '/' && (/\D/.test(String(characterID)) || String(characterID).startsWith('0'))) {
    // return <Navigate to="*" replace />;
    replace('*').catch(() => {});
    return null;
  } */

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      push({ pathname: '/', query: { page } }).catch(() => {});
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'} onClick={handleClose} role="presentation">
      <section onClick={handleClose}>
        <Search character={character} loader={loader} searchField={searchField} setCharacter={setCharacter} />
      </section>
      <section className={styles.results} onClick={handleClose}>
        <div className={characterID !== '/' ? styles.character : styles.results_box}>
          {loader ? (
            <div className={styles.loader} />
          ) : (
            <Results
              characters={characters}
              total={total}
              page={page}
              characterID={String(characterID)}
              handleClose={handleClose}
            />
          )}
          {children?.(String(characterID))}
        </div>
      </section>
      <Flyout />
    </main>
  );
}
