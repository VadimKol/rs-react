import { Component, type ReactNode } from 'react';
import { type Character } from 'rickmortyapi';

import { Loader } from '../loader/Loader';
import styles from './styles.module.scss';
import type { CharacterState } from './types';

export class CharacterCard extends Component<{ character: Character }, CharacterState> {
  constructor(props: { character: Character }) {
    super(props);
    this.state = { isImageLoading: true };
  }

  public render(): ReactNode {
    const { character } = this.props;
    const { isImageLoading } = this.state;
    return (
      <div className={styles.card}>
        <div className={styles.image_container}>
          {isImageLoading && <Loader />}
          <img
            className={styles.character_img}
            src={character.image}
            alt="Character"
            onLoad={() => this.setState({ isImageLoading: false })}
            style={{ display: isImageLoading ? 'none' : 'block' }}
          />
        </div>
        <div className={styles.text_container}>
          <h2 className={styles.card_title}>{character.name}</h2>
          <p className={styles.card_description}>{character.species}</p>
          <p className={styles.card_description}>{character.gender}</p>
          <p className={styles.card_description}>Status: {character.status}</p>
          <p className={styles.card_description}>Origin: {character.origin.name}</p>
          <p className={styles.card_description}>Location: {character.location.name}</p>
          <p className={styles.card_description}>
            Episodes: {character.episode.map((episode) => episode.replace(/\D/g, '')).join(', ')}
          </p>
          {character.type !== '' && <p className={styles.card_description}>Type: {character.type}</p>}
        </div>
      </div>
    );
  }
}
