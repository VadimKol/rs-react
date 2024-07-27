import { type MouseEventHandler, type ReactNode, useEffect, useRef, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetCharactersQuery } from '@/store/rickmortyApi';

import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';

export function Main(): ReactNode {
  const [pageQuery, setPageQuery] = useSearchParams();
  const [page, setPage] = useState(Math.floor(Number(pageQuery.get('page'))) || 1);
  const [ls] = useLocalStorage('R&M_search');
  const [character, setCharacter] = useState({ name: ls });
  const searchField = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const characterID = pathname.replace('/character/', '');
  const navigate = useNavigate();
  const { data, isFetching: loader, isError, error } = useGetCharactersQuery({ page, character });
  const { characters, totalPages: total } = data || { characters: [], totalPages: 0 };

  useEffect(() => {
    if (!pageQuery.get('page')) {
      setPageQuery({ page: String(page) }, { replace: true });
    }
  }, [page, pageQuery, setPageQuery]);

  if (isError) {
    throw error;
  }

  if (characterID !== '/' && (/\D/.test(characterID) || characterID.startsWith('0'))) {
    return <Navigate to="*" replace />;
  }

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      navigate('/');
    }
  };

  return (
    <main className="main" onClick={handleClose} role="presentation">
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
          <Outlet context={characterID} />
        </div>
      </section>
    </main>
  );
}
