import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { type Character } from 'rickmortyapi';

import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function CharacterCard({ character }: { character: Character }): ReactNode {
  return (
    <div className={styles.card}>
      <ImageBlock src={character.image} alt="Character" />
      <div className={styles.text_container}>
        <Link to={`character/${character.id}`} className={styles.card_link}>
          <h2 className={styles.card_title}>{character.name}</h2>
        </Link>
      </div>
    </div>
  );
}
