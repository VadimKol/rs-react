import { type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ searchField, character, setCharacter, setPage, setLoader, loader }: SearchProps): ReactNode {
  const [, setPageQuery] = useSearchParams();
  const [, setLs] = useLocalStorage('R&M_search');
  return (
    <form
      className={styles.search_form}
      onSubmit={(e) => {
        e.preventDefault();
        if (typeof searchField.current?.value === 'string' && !loader) {
          const searchValue = searchField.current?.value.trim();
          setCharacter({ name: searchValue });
          setLs(searchValue);
          setPage(1);
          setLoader(true);
          setPageQuery({ page: '1' });
        }
      }}
    >
      <input
        id="search"
        className={styles.search}
        type="text"
        placeholder="Search..."
        ref={searchField}
        defaultValue={character.name}
      />
      <button data-testid="search" type="submit" className={styles.search_button} aria-label="Search-button" />
    </form>
  );
}
