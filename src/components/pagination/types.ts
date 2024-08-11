import { type MouseEventHandler } from 'react';

export interface PaginationProps {
  page: number;
  total: number;
  handleClose: MouseEventHandler;
}
