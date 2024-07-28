import { type ReactNode } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';

import { useGetCharacterQuery } from '@/store/rickmortyApi';

import { CustomButton } from '../custom-button/СustomButton';
import { FavoriteButton } from '../favorite-button/FavoriteButton';
import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function DetailedCard(): ReactNode {
  const characterID = useOutletContext<string>();
  const navigate = useNavigate();
  const { data: character, isFetching: loader, isError, error } = useGetCharacterQuery(Number(characterID));

  if (isError) {
    throw error;
  }

  if (character === null) {
    return <Navigate to="*" replace />;
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
      {loader ? (
        <div className={styles.loader} />
      ) : (
        <>
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
          <CustomButton className={styles.close} onClick={() => navigate('/')}>
            Close
          </CustomButton>
        </>
      )}
    </section>
  );
}
