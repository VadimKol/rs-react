import { type MouseEventHandler } from 'react';

export interface PaginationProps {
  total: number;
  handleClose: MouseEventHandler;
}
