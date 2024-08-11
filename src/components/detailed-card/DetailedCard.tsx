import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

import { CustomButton } from '@/components/custom-button/СustomButton';
import { FavoriteButton } from '@/components/favorite-button/FavoriteButton';
import { ImageBlock } from '@/components/image-block/ImageBlock';
import { useGetCharacterQuery } from '@/store/rickmortyApi';

import styles from './styles.module.scss';

export default function DetailedCard({ characterID }: { characterID: string }): ReactNode {
  const { query, push, replace } = useRouter();
  const { data: character, isFetching: loader, isError, error } = useGetCharacterQuery(Number(characterID));

  if (isError) {
    throw error;
  }

  if (character === null) {
    replace('*').catch(() => {});
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
          <CustomButton
            className={styles.close}
            onClick={() => {
              push({ pathname: '/', query: { page: query.page } }).catch(() => {});
            }}
          >
            Close
          </CustomButton>
        </>
      )}
    </section>
  );
}
