import { Component, createRef, type ReactNode } from 'react';
import { type Character, getCharacters } from 'rickmortyapi';

import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';
import type { MainProps, MainState } from './types';

export class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      characters: [],
      total: 0,
      page: 1,
      loader: true,
      character: { name: localStorage.getItem('R&M_search') || '' },
      err: '',
      searchField: createRef(),
    };
  }

  public componentDidMount(): void {
    const { page, character } = this.state;
    this.getData(page, character);
  }

  public componentDidUpdate(_: MainProps, prevState: MainState): void {
    const { page, character } = this.state;
    if (page !== prevState.page || character !== prevState.character) {
      this.getData(page, character);
    }
  }

  public getData = (page: number, character: { name: string }): void => {
    getCharacters({ page, name: character.name })
      .then((response) => {
        if (response.status === 200 && response.data.results) {
          this.setCharacters(response.data.results);
          this.setTotal(response.data.info?.pages || 0);
        } else if (response.status === 404) {
          this.setCharacters([]);
          this.setTotal(0);
        } else {
          throw new Error(response.statusMessage);
        }
      })
      .catch((error: Error) => this.setErr(error.message))
      .finally(() => this.setLoader(false));
  };

  public setPage = (page: number): void => this.setState((prevState) => ({ ...prevState, page }));

  public setLoader = (loader: boolean): void => this.setState((prevState) => ({ ...prevState, loader }));

  public setTotal = (total: number): void => this.setState((prevState) => ({ ...prevState, total }));

  public setCharacters = (characters: Character[]): void =>
    this.setState((prevState) => ({ ...prevState, characters }));

  public setCharacter = (character: { name: string }): void =>
    this.setState((prevState) => ({ ...prevState, character }));

  public setErr = (err: string): void => this.setState((prevState) => ({ ...prevState, err }));

  public render(): ReactNode {
    const { characters, total, page, loader, character, err, searchField } = this.state;

    if (err) {
      throw new Error(err);
    }

    return (
      <footer className="main">
        <section className={styles.search}>
          <Search
            character={character}
            loader={loader}
            searchField={searchField}
            setCharacter={this.setCharacter}
            setPage={this.setPage}
            setLoader={this.setLoader}
          />
          <button className={styles.error} type="button" onClick={() => this.setErr('Oops, something went wrong!')}>
            Error
          </button>
        </section>
        <section className={styles.results}>
          {loader ? (
            <div className={styles.loader} />
          ) : (
            <Results
              characters={characters}
              total={total}
              page={page}
              setPage={this.setPage}
              setLoader={this.setLoader}
            />
          )}
        </section>
      </footer>
    );
  }
}
