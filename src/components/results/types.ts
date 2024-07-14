import { type Character } from 'rickmortyapi';

export interface ResultsProps {
  characters: Character[];
  total: number;
  page: number;
  setPage: (page: number) => void;
  setLoader: (loader: boolean) => void;
  characterID: string;
}
