import { useState } from 'react';

import not_found from '@/assets/images/not_found.jpg';

import { CharacterCard } from '../character-card/CharacterCard';
import { Loader } from '../loader/Loader';
import { Pagination } from '../pagination/Pagination';
import styles from './styles.module.scss';
import { type ResultsProps } from './types';

export function Results({ characters, total, page, setPage, setLoader }: ResultsProps): JSX.Element {
  const [isImageLoading, setIsImageLoading] = useState(true);
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
      <div className={styles.image_container}>
        {isImageLoading && <Loader />}
        <img
          className={styles.character_img}
          src={not_found}
          alt="Rick and Morty not found"
          onLoad={() => setIsImageLoading(false)}
          style={{ display: isImageLoading ? 'none' : 'block' }}
        />
      </div>
      <div className={styles.text_container}>Characters not found</div>
    </div>
  );
}
