import { useRouter } from 'next/router';
import { type MouseEventHandler, type ReactNode, useEffect, useState } from 'react';

import { Flyout } from '@/components/flyout/Flyout';
import { Results } from '@/components/results/Results';
import { Search } from '@/components/search/Search';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTheme } from '@/hooks/useTheme';
import { endpoints, useGetCharactersQuery } from '@/store/rickmortyApi';
import { wrapper } from '@/store/store';

import styles from './index.module.scss';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context): Promise<{ props: object }> => {
  const { page, search } = context.query;

  await store.dispatch(
    endpoints.getCharacters.initiate({
      page: Math.floor(Number(page)) || 1,
      name: String(search || ''),
    }),
  );

  return { props: {} };
});

export default function Main({ children }: { children?: (characterID: string) => ReactNode }): ReactNode {
  const { query, push, events, replace } = useRouter();
  const page = Math.floor(Number(query.page)) || 1;
  const [ls, setLs] = useLocalStorage('R&M_search');
  const characterID = query.id || '/';
  const { data, isError, error } = useGetCharactersQuery({ page, name: String(query.search || '') });
  const { characters, totalPages: total } = data || { characters: [], totalPages: 0 };
  const { theme } = useTheme();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (query.search !== undefined) {
      setLs(String(query.search));
    } else if (ls.length > 0) {
      replace({ pathname: '/', query: { page, search: ls } });
    }
  }, [query, setLs, ls, replace, page]);

  if (isError) {
    throw error;
  }

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      push({ pathname: '/', query: { page, search: query.search } });
    }
  };

  useEffect(() => {
    const RouteChange = (): void => setLoader(true);
    const RouteComplete = (): void => setLoader(false);

    events.on('routeChangeStart', RouteChange);
    events.on('routeChangeComplete', RouteComplete);
    events.on('routeChangeError', RouteComplete);

    return (): void => {
      events.off('routeChangeStart', RouteChange);
      events.off('routeChangeComplete', RouteComplete);
      events.off('routeChangeError', RouteComplete);
    };
  }, [events]);

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'} onClick={handleClose} role="presentation">
      <section onClick={handleClose}>
        <Search loader={loader} />
      </section>
      <section className={styles.results} onClick={handleClose}>
        <div className={characterID !== '/' ? styles.character : styles.results_box}>
          {loader ? (
            <div className={styles.loader} />
          ) : (
            <>
              <Results
                characters={characters}
                total={total}
                characterID={String(characterID)}
                handleClose={handleClose}
              />
              {children?.(String(characterID))}
            </>
          )}
        </div>
      </section>
      <Flyout />
    </main>
  );
}
