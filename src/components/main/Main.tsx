import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { type Character, getCharacters } from 'rickmortyapi';

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
  const [character, setCharacter] = useState({ name: localStorage.getItem('R&M_search') || '' });
  const [err, setErr] = useState('');
  const [noMatch, setNoMatch] = useState(false);
  const searchField = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const characterID = pathname.replace('/character/', '');

  if (!pageQuery.get('page')) {
    setPageQuery({ page: String(page) });
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

  return (
    <main className="main">
      <section className={styles.search}>
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
      <section className={styles.results}>
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
            />
          )}
          <Outlet context={{ characterID, setNoMatch }} />
        </div>
      </section>
    </main>
  );
}
