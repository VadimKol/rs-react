import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { type ReactNode } from 'react';
import { type Character } from 'rickmortyapi';

import { FavoriteButton } from '../favorite-button/FavoriteButton';
import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function CharacterCard({ character }: { character: Character }): ReactNode {
  const searchParams = useSearchParams();
  const page = Math.floor(Number(searchParams.get('page'))) || 1;
  const search = searchParams.get('search') || '';

  return (
    <div className={styles.card}>
      <ImageBlock src={character.image} alt="Character" />
      <div className={styles.text_container}>
        <Link href={`/character/${character.id}?page=${page}&search=${search}`} className={styles.card_link}>
          <h2 className={styles.card_title}>{character.name}</h2>
        </Link>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
}
