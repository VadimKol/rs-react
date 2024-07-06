import { CharacterCard } from '../character-card/CharacterCard';
import { Pagination } from '../pagination/Pagination';
import styles from './styles.module.scss';
import { type ResultsProps } from './types';

export function Results({ characters, total, page, setPage }: ResultsProps): JSX.Element {
  return (
    <>
      <ul className={characters.length ? styles.characters : `${styles.characters} ${styles.characters_not_found}`}>
        {characters.map((character) => (
          <li key={character.id} className={styles.characters_item}>
            <CharacterCard character={character} />
          </li>
        ))}
        {/* {!products.length && <li className={styles.not_found}>Products not found</li>} */}
      </ul>
      <Pagination total={total} page={page} setPage={setPage} />
    </>
  );
}
