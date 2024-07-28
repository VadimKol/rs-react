import { type ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import styles from './styles.module.scss';
import type { SearchProps } from './types';

export function Search({ searchField, character, setCharacter, setPage, loader }: SearchProps): ReactNode {
  const [, setPageQuery] = useSearchParams();
  const [, setLs] = useLocalStorage('R&M_search');
  const navigate = useNavigate();

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
          setPageQuery({ page: '1' });
          navigate('/', { replace: true });
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
