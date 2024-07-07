import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ searchField, character, setCharacter, setPage, setLoader, loader }: SearchProps): JSX.Element {
  return (
    <form
      className={styles.search_form}
      onSubmit={(e) => {
        e.preventDefault();
        if (typeof searchField.current?.value === 'string' && !loader) {
          const searchValue = searchField.current?.value.trim();
          setCharacter({ name: searchValue });
          localStorage.setItem('R&M_search', searchValue);
          setPage(1);
          setLoader(true);
        }
      }}
    >
      <div className={styles.search_box}>
        <input
          id="search"
          className={styles.search}
          type="text"
          placeholder="Search..."
          ref={searchField}
          defaultValue={character.name}
        />
        <button type="submit" className={styles.search_button} aria-label="Search-button" />
      </div>
    </form>
  );
}
