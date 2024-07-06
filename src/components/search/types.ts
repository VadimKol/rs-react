export interface SearchProps {
  searchField: React.RefObject<HTMLInputElement>;
  name: string;
  setName: (name: string) => void;
  setPage: (page: number) => void;
  setLoader: (loader: boolean) => void;
}
