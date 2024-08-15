import { useNavigate, useSearchParams } from '@remix-run/react';
import { type ReactNode } from 'react';
import { type Character } from 'rickmortyapi';

import { CustomButton } from '../custom-button/СustomButton';
import { FavoriteButton } from '../favorite-button/FavoriteButton';
import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function DetailedCard({ character }: { character: Character | null }): ReactNode {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Math.floor(Number(searchParams.get('page'))) || 1;
  const search = searchParams.get('search') || '';

  if (character === null) {
    navigate('*', { replace: true });
    return null;
  }

  const desc = [
    `Species: ${character?.species}`,
    `Gender: ${character?.gender}`,
    `Status: ${character?.status}`,
    `Origin: ${character?.origin?.name}`,
    `Location: ${character?.location?.name}`,
  ];

  return (
    <section className={styles.detailed_Card}>
      <div className={styles.card}>
        <ImageBlock src={character?.image || ''} alt="Character" />
        <div className={styles.text_container}>
          <h2 className={styles.card_title}>{character?.name}</h2>
          <ul className={styles.desc}>
            {desc.map((item) => (
              <li key={item} className={styles.desc_item}>
                {item}
              </li>
            ))}
          </ul>
          {character?.type !== '' && <p className={styles.type}>Type: {character?.type}</p>}
          <p className={styles.episodes}>
            Episodes: {character?.episode.map((episode) => episode.replace(/\D/g, '')).join(', ')}
          </p>
          <FavoriteButton character={character} />
        </div>
      </div>
      <CustomButton className={styles.close} onClick={() => navigate(`/?page=${page}&search=${search}`)}>
        Close
      </CustomButton>
    </section>
  );
}
