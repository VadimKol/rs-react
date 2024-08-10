import { type AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { type MouseEventHandler, type ReactNode, /*  useEffect, */ useRef, useState } from 'react';

// import { Navigate, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Flyout } from '@/components/flyout/Flyout';
import { Results } from '@/components/results/Results';
import { Search } from '@/components/search/Search';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTheme } from '@/hooks/useTheme';
import { useGetCharactersQuery } from '@/store/rickmortyApi';

import styles from './index.module.scss';

export function Main({ Component }: AppProps): ReactNode {
  // const [pageQuery, setPageQuery] = useSearchParams();
  const { pathname, query, push } = useRouter();
  // const [page, setPage] = useState(Math.floor(Number(pageQuery.get('page'))) || 1);
  const [page, setPage] = useState(Math.floor(Number(query.page)) || 1);
  const [ls] = useLocalStorage('R&M_search');
  const [character, setCharacter] = useState({ name: ls });
  const searchField = useRef<HTMLInputElement>(null);
  // const { pathname } = useLocation();
  const characterID = pathname.replace('/character/', '');
  // const navigate = useNavigate();
  const { data, isFetching: loader, isError, error } = useGetCharactersQuery({ page, character });
  const { characters, totalPages: total } = data || { characters: [], totalPages: 0 };
  const { theme } = useTheme();

  /*   useEffect(() => {
    if (!pageQuery.get('page')) {
      setPageQuery({ page: String(page) }, { replace: true });
    }
  }, [page, pageQuery, setPageQuery]); */

  if (isError) {
    throw error;
  }

  /*   if (characterID !== '/' && (/\D/.test(characterID) || characterID.startsWith('0'))) {
    return <Navigate to="*" replace />;
  } */

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      // navigate('/');
      push('/').catch(() => {});
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'} onClick={handleClose} role="presentation">
      <section onClick={handleClose}>
        <Search
          character={character}
          loader={loader}
          searchField={searchField}
          setCharacter={setCharacter}
          setPage={setPage}
        />
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
              setPage={setPage}
              characterID={characterID}
              handleClose={handleClose}
            />
          )}
          <Component characterID={characterID} />
        </div>
      </section>
      <Flyout />
    </main>
  );
}
