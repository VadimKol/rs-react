import { type ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { charactersToCsv } from '@/common/utils';
import { clearFavorites, useFavorites } from '@/store/favoritesSlice';

import { CustomButton } from '../custom-button/СustomButton';
import styles from './styles.module.scss';

export function Flyout(): ReactNode {
  const dispatch = useDispatch();
  const favorites = useFavorites();
  const url = URL.createObjectURL(new Blob([charactersToCsv(favorites)], { type: 'text/csv' }));

  useEffect(() => (): void => URL.revokeObjectURL(url), [url]);

  return (
    !!favorites.length && (
      <div className={styles.flyout}>
        <h3 className={styles.title}>{`${favorites.length} items are selected`}</h3>
        <div className={styles.buttons}>
          <CustomButton className={styles.button} aria-label="Unselect all" onClick={() => dispatch(clearFavorites())}>
            Unselect all
          </CustomButton>
          <CustomButton className={styles.button} aria-label="Download as .csv">
            <a className={styles.download_link} href={url} download={`${favorites.length}_characters.csv`}>
              Download
            </a>
          </CustomButton>
        </div>
      </div>
    )
  );
}
