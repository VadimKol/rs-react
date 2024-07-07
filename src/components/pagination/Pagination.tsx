import { Component, type ReactNode } from 'react';

import styles from './styles.module.scss';
import { type PaginationProps } from './types';

export class Pagination extends Component<PaginationProps> {
  public render(): ReactNode {
    const { page, total, setPage, setLoader } = this.props;
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
      <div className={styles.pagination}>
        <div className={paginationStyles}>
          {Boolean(page - 1) && (
            <button
              type="button"
              aria-label="Left"
              className={styles.pag_left}
              onClick={() => {
                setPage(page - 1);
                setLoader(true);
              }}
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
              onClick={() => {
                setPage(page + 1);
                setLoader(true);
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
