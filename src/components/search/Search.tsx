import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ searchField }: SearchProps): JSX.Element {
  return (
    <form
      className={styles.search_form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.search_box}>
        <input id="search" className={styles.search} type="text" placeholder="Search..." ref={searchField} />
        <button type="submit" className={styles.search_button} aria-label="Search-button" />
      </div>
    </form>
  );
}
