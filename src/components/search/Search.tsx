import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ searchField, name, setName, setPage, setLoader }: SearchProps): JSX.Element {
  return (
    <form
      className={styles.search_form}
      onSubmit={(e) => {
        e.preventDefault();
        if (typeof searchField.current?.value === 'string' && name !== searchField.current?.value.trim()) {
          const searchValue = searchField.current?.value.trim();
          setName(searchValue);
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
          defaultValue={name}
        />
        <button type="submit" className={styles.search_button} aria-label="Search-button" />
      </div>
    </form>
  );
}
