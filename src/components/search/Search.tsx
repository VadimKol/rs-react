import { Component, type ReactNode } from 'react';

import styles from './styles.module.scss';
import type { SearchProps } from './types';

export class Search extends Component<SearchProps> {
  public render(): ReactNode {
    const { searchField, character, setCharacter, setPage, setLoader, loader } = this.props;
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
}
