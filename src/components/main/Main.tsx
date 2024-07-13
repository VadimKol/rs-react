import { type ReactNode, useEffect, useRef, useState } from 'react';
import { type Character, getCharacters } from 'rickmortyapi';

import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';

export function Main(): ReactNode {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [character, setCharacter] = useState({ name: localStorage.getItem('R&M_search') || '' });
  const [err, setErr] = useState('');
  const searchField = useRef<HTMLInputElement>(null);

  if (err) {
    throw new Error(err);
  }

  useEffect(() => {
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
  }, [page, character]);

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
        {loader ? (
          <div className={styles.loader} />
        ) : (
          <Results characters={characters} total={total} page={page} setPage={setPage} setLoader={setLoader} />
        )}
      </section>
    </main>
  );
}
