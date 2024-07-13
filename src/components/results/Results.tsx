import { type ReactNode } from 'react';

import not_found from '@/assets/images/not_found.jpg';

import { CharacterCard } from '../character-card/CharacterCard';
import { ImageBlock } from '../image-block/ImageBlock';
import { Pagination } from '../pagination/Pagination';
import styles from './styles.module.scss';
import type { ResultsProps } from './types';

export function Results({ characters, total, page, setPage, setLoader }: ResultsProps): ReactNode {
  return characters.length ? (
    <>
      <ul className={styles.characters}>
        {characters.map((character) => (
          <li key={character.id} className={styles.characters_item}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <Pagination total={total} page={page} setPage={setPage} setLoader={setLoader} />
    </>
  ) : (
    <div className={styles.not_found}>
      <ImageBlock src={not_found} alt="Rick and Morty not found" />
      <div className={styles.text_container}>Characters not found</div>
    </div>
  );
}
