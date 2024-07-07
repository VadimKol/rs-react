import { type RefObject } from 'react';
import { type Character } from 'rickmortyapi';

export interface MainProps {}

export interface MainState {
  characters: Character[];
  total: number;
  page: number;
  loader: boolean;
  character: { name: string };
  err: string;
  searchField: RefObject<HTMLInputElement>;
}
