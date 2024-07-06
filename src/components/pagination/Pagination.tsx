import styles from './styles.module.scss';
import { type PaginationProps } from './types';

export function Pagination({ page, total, setPage }: PaginationProps): JSX.Element {
  let paginationStyles = styles.pagination_box;
  if (!(page - 1)) {
    paginationStyles = `${styles.pagination_box_before}`;
  }
  if (!(page + 1 < total)) {
    paginationStyles = `${styles.pagination_box_after}`;
  }
  return (
    <div className={styles.pagination}>
      <div className={paginationStyles}>
        {Boolean(page - 1) && (
          <button type="button" aria-label="Left" className={styles.pag_left} onClick={() => setPage(page - 1)} />
        )}
        <div className={styles.pages}>
          <span>{page}</span>-<span>{total}</span>
        </div>
        {page + 1 < total && (
          <button type="button" aria-label="Right" className={styles.pag_right} onClick={() => setPage(page + 1)} />
        )}
      </div>
    </div>
  );
}
