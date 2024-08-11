import Link from 'next/link';
import { useRouter } from 'next/router';
import { type ReactNode } from 'react';
import { type Character } from 'rickmortyapi';

import { FavoriteButton } from '../favorite-button/FavoriteButton';
import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function CharacterCard({ character }: { character: Character }): ReactNode {
  const { query } = useRouter();
  const page = query.page || '1';

  return (
    <div className={styles.card}>
      <ImageBlock src={character.image} alt="Character" />
      <div className={styles.text_container}>
        <Link href={`/character/${character.id}?page=${String(page)}`} className={styles.card_link}>
          <h2 className={styles.card_title}>{character.name}</h2>
        </Link>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
}
