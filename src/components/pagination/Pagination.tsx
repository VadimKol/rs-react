import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

import styles from './styles.module.scss';
import { type PaginationProps } from './types';

export function Pagination({ page, total, handleClose }: PaginationProps): ReactNode {
  const { push } = useRouter();

  let paginationStyles = styles.pagination_box;
  if (!(page - 1)) {
    paginationStyles = `${styles.pagination_box_before}`;
  }
  if (!(page < total)) {
    paginationStyles = `${styles.pagination_box_after}`;
  }
  if (!(page - 1) && !(page < total)) {
    paginationStyles = styles.pagination_box;
  }

  const handlePage = (newPage: number): void => {
    push({ pathname: '/', query: { page: String(newPage) } }).catch(() => {});
  };

  return (
    <div className={styles.pagination} onClick={handleClose}>
      <div className={paginationStyles} onClick={handleClose}>
        {Boolean(page - 1) && (
          <button type="button" aria-label="Left" className={styles.pag_left} onClick={() => handlePage(page - 1)} />
        )}
        <div className={styles.pages}>
          <span>{page}</span>-<span>{total}</span>
        </div>
        {page < total && (
          <button type="button" aria-label="Right" className={styles.pag_right} onClick={() => handlePage(page + 1)} />
        )}
      </div>
    </div>
  );
}
