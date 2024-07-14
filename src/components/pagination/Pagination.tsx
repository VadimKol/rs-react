import { type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './styles.module.scss';
import { type PaginationProps } from './types';

export function Pagination({ page, total, setPage, setLoader, handleClose }: PaginationProps): ReactNode {
  const [, setPageQuery] = useSearchParams();
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
            data-testid="left"
            type="button"
            aria-label="Left"
            className={styles.pag_left}
            onClick={() => {
              setPage(page - 1);
              setLoader(true);
              setPageQuery({ page: String(page - 1) });
            }}
          />
        )}
        <div className={styles.pages}>
          <span>{page}</span>-<span>{total}</span>
        </div>
        {page < total && (
          <button
            data-testid="right"
            type="button"
            aria-label="Right"
            className={styles.pag_right}
            onClick={() => {
              setPage(page + 1);
              setLoader(true);
              setPageQuery({ page: String(page + 1) });
            }}
          />
        )}
      </div>
    </div>
  );
}
