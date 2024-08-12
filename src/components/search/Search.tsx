import { useRouter } from 'next/router';
import { type ReactNode, useRef } from 'react';

import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ loader }: SearchProps): ReactNode {
  const {
    query: { search },
    replace,
  } = useRouter();
  const searchField = useRef<HTMLInputElement>(null);

  return (
    <form
      className={styles.search_form}
      onSubmit={(e) => {
        e.preventDefault();
        if (typeof searchField.current?.value === 'string' && !loader) {
          const searchValue = searchField.current?.value.trim();
          replace({ pathname: '/', query: { page: '1', search: searchValue } });
        }
      }}
    >
      <input
        id="search"
        className={styles.search}
        type="text"
        placeholder="Search..."
        ref={searchField}
        defaultValue={search}
      />
      <button type="submit" className={styles.search_button} aria-label="Search-button" />
    </form>
  );
}
