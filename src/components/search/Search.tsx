import { type ReactNode } from 'react';

import { useSearch } from '@/hooks/useSearch';

import styles from './styles.module.scss';

export function Search({ loader }: { loader: boolean }): ReactNode {
  const { searchParams, searchField, handleSubmit } = useSearch(loader);

  return (
    <form className={styles.search_form} onSubmit={handleSubmit}>
      <input
        id="search"
        className={styles.search}
        type="text"
        placeholder="Search..."
        ref={searchField}
        defaultValue={searchParams.get('search') || ''}
      />
      <button type="submit" className={styles.search_button} aria-label="Search-button" />
    </form>
  );
}
