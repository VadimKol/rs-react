export interface PaginationProps {
  page: number;
  total: number;
  setPage: (page: number) => void;
  setLoader: (loader: boolean) => void;
}
