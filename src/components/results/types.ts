import { type MouseEventHandler } from 'react';
import { type Character } from 'rickmortyapi';

export interface ResultsProps {
  characters: Character[];
  total: number;
  page: number;
  characterID: string;
  handleClose: MouseEventHandler;
}
