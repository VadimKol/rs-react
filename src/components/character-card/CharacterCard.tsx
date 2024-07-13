import { type ReactNode } from 'react';
import { type Character } from 'rickmortyapi';

import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function CharacterCard({ character }: { character: Character }): ReactNode {
  const desc = [
    `Species: ${character.species}`,
    `Gender: ${character.gender}`,
    `Status: ${character.status}`,
    `Origin: ${character.origin.name}`,
    `Location: ${character.location.name}`,
  ];
  return (
    <div className={styles.card}>
      <ImageBlock src={character.image} alt="Character" />
      <div className={styles.text_container}>
        <h2 className={styles.card_title}>{character.name}</h2>
        <ul className={styles.desc}>
          {desc.map((item) => (
            <li key={item} className={styles.desc_item}>
              {item}
            </li>
          ))}
        </ul>
        {character.type !== '' && <p className={styles.type}>Type: {character.type}</p>}
        <p className={styles.episodes}>
          Episodes: {character.episode.map((episode) => episode.replace(/\D/g, '')).join(', ')}
        </p>
      </div>
    </div>
  );
}
