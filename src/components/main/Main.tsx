import { type MouseEventHandler, type ReactNode, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { type Character, getCharacters } from 'rickmortyapi';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { NoMatch } from '../no-match/NoMatch';
import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';

export function Main(): ReactNode {
  const [pageQuery, setPageQuery] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(Math.floor(Number(pageQuery.get('page'))) || 1);
  const [loader, setLoader] = useState(true);
  const [ls] = useLocalStorage('R&M_search');
  const [character, setCharacter] = useState({ name: ls });
  const [err, setErr] = useState('');
  const [noMatch, setNoMatch] = useState(false);
  const searchField = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const characterID = pathname.replace('/character/', '');
  const navigate = useNavigate();

  if (!pageQuery.get('page')) {
    setPageQuery({ page: String(page) }, { replace: true });
  }

  if (err) {
    throw new Error(err);
  }

  if (characterID !== '/' && (/\D/.test(characterID) || characterID.startsWith('0'))) {
    setNoMatch(true);
  }

  useEffect(() => {
    if (!noMatch) {
      getCharacters({ page, name: character.name })
        .then((response) => {
          if (response.status === 200 && response.data.results) {
            setCharacters(response.data.results);
            setTotal(response.data.info?.pages || 0);
          } else if (response.status === 404) {
            setCharacters([]);
            setTotal(0);
          } else {
            throw new Error(response.statusMessage);
          }
        })
        .catch((error: Error) => setErr(error.message))
        .finally(() => setLoader(false));
    }
  }, [page, character, noMatch]);

  if (noMatch) {
    return <NoMatch setNoMatch={setNoMatch} />;
  }

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      navigate('/');
    }
  };

  return (
    <main className="main" onClick={handleClose} role="presentation">
      <section className={styles.search} onClick={handleClose}>
        <Search
          character={character}
          loader={loader}
          searchField={searchField}
          setCharacter={setCharacter}
          setPage={setPage}
          setLoader={setLoader}
        />
        <button className={styles.error} type="button" onClick={() => setErr('Oops, something went wrong!')}>
          Error
        </button>
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
              setLoader={setLoader}
              characterID={characterID}
              handleClose={handleClose}
            />
          )}
          <Outlet context={{ characterID, setNoMatch }} />
        </div>
      </section>
    </main>
  );
}
