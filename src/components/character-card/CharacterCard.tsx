import { Component, type ReactNode } from 'react';
import { type Character } from 'rickmortyapi';

import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export class CharacterCard extends Component<{ character: Character }> {
  public render(): ReactNode {
    const { character } = this.props;
    return (
      <div className={styles.card}>
        <ImageBlock src={character.image} alt="Character" />
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
