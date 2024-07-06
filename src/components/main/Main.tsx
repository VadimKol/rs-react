import { useEffect, useRef, useState } from 'react';
import { type Character, getCharacters } from 'rickmortyapi';

import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';

export function Main(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState(localStorage.getItem('R&M_search') || '');
  const searchField = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState(false);

  if (err) {
    throw new Error('Oops, something went wrong!');
  }

  useEffect(() => {
    getCharacters({ page, name })
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
      .catch((error: unknown) => {
        throw error;
      })
      .finally(() => setLoader(false));
  }, [page, name]);

  return (
    <footer className="main">
      <section className={styles.search}>
        <Search name={name} setName={setName} searchField={searchField} setPage={setPage} setLoader={setLoader} />
        <button className={styles.error} type="button" onClick={() => setErr(true)}>
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
    </footer>
  );
}
