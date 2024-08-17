import { type ReactNode, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { type Character } from 'rickmortyapi';

import { addToFavorites, removeFromFavorites, useIsFavorite } from '@/store/favoritesSlice';

import styles from './styles.module.scss';

export function FavoriteButton({ character }: { character: Character }): ReactNode {
  const dispatch = useDispatch();
  const favorite = useIsFavorite(character);

  const handleClick = useCallback(
    () => (favorite ? dispatch(removeFromFavorites(character)) : dispatch(addToFavorites(character))),
    [character, dispatch, favorite],
  );

  return (
    <button
      type="button"
      className={styles.favorite}
      name="favorite"
      value={String(favorite)}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={handleClick}
    >
      {favorite ? '★' : '☆'}
    </button>
  );
}
