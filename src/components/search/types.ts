export interface SearchProps {
  searchField: React.RefObject<HTMLInputElement>;
  character: { name: string };
  setCharacter: (character: { name: string }) => void;
  setPage: (page: number) => void;
  loader: boolean;
}
