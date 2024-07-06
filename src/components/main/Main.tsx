import { useEffect, useRef, useState } from 'react';
import { type Character, getCharacters } from 'rickmortyapi';

import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';

export function Main(): JSX.Element {
  const searchField = useRef<HTMLInputElement>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters({ page })
      .then((response) => {
        if (response.data.results) {
          setCharacters(response.data.results);
          setTotal(response.data.info?.pages || 0);
        }
      })
      .catch(console.error);
    /*     const locations = await getLocations() */
  }, [page]);
  return (
    <footer className="main">
      <section className={styles.sections}>
        <Search searchField={searchField} />
      </section>
      <section className={styles.sections}>
        <Results characters={characters} total={total} page={page} setPage={setPage} />
      </section>
    </footer>
  );
}
