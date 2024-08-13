import { useRouter, useSearchParams } from 'next/navigation';
import { type ReactNode } from 'react';

import styles from './styles.module.scss';
import { type PaginationProps } from './types';

export function Pagination({ total, handleClose }: PaginationProps): ReactNode {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Math.floor(Number(searchParams.get('page'))) || 1;
  const search = searchParams.get('search') || '';

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

  return (
    <div className={styles.pagination} onClick={handleClose}>
      <div className={paginationStyles} onClick={handleClose}>
        {Boolean(page - 1) && (
          <button
            type="button"
            aria-label="Left"
            className={styles.pag_left}
            onClick={() => router.push(`/?page=${page - 1}&search=${search}`)}
          />
        )}
        <div className={styles.pages}>
          <span>{page}</span>-<span>{total}</span>
        </div>
        {page < total && (
          <button
            type="button"
            aria-label="Right"
            className={styles.pag_right}
            onClick={() => router.push(`/?page=${page + 1}&search=${search}`)}
          />
        )}
      </div>
    </div>
  );
}
