import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ searchField, character, setCharacter, loader }: SearchProps): ReactNode {
  const [, setLs] = useLocalStorage('R&M_search');
  const { replace } = useRouter();

  return (
    <form
      className={styles.search_form}
      onSubmit={(e) => {
        e.preventDefault();
        if (typeof searchField.current?.value === 'string' && !loader) {
          const searchValue = searchField.current?.value.trim();
          setCharacter({ name: searchValue });
          setLs(searchValue);
          replace({ pathname: '/', query: { page: '1' } }).catch(() => {});
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
      <button type="submit" className={styles.search_button} aria-label="Search-button" />
    </form>
  );
}
