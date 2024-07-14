import { type MouseEventHandler, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import not_found from '@/assets/images/not_found.jpg';

import { CharacterCard } from '../character-card/CharacterCard';
import { ImageBlock } from '../image-block/ImageBlock';
import { Pagination } from '../pagination/Pagination';
import styles from './styles.module.scss';
import type { ResultsProps } from './types';

export function Results({ characters, total, page, setPage, setLoader, characterID }: ResultsProps): ReactNode {
  const navigate = useNavigate();

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      navigate('/');
    }
  };

  return characters.length ? (
    <div className={characterID !== '/' ? styles.results : styles.no_character}>
      <ul className={styles.characters} onClick={handleClose} role="presentation">
        {characters.map((character) => (
          <li key={character.id} className={styles.characters_item}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <Pagination total={total} page={page} setPage={setPage} setLoader={setLoader} handleClose={handleClose} />
    </div>
  ) : (
    <div className={styles.not_found_box}>
      <div className={styles.not_found}>
        <ImageBlock src={not_found} alt="Rick and Morty not found" />
        <div className={styles.text_container}>Characters not found</div>
      </div>
    </div>
  );
}
