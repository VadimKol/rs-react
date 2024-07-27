import { type MouseEventHandler } from 'react';

export interface PaginationProps {
  page: number;
  total: number;
  setPage: (page: number) => void;
  handleClose: MouseEventHandler;
}
