import { useNavigate, useSearchParams } from '@remix-run/react';
import { type FormEvent, type RefObject, useCallback, useRef } from 'react';

export const useSearch = (
  loader: boolean,
): {
  searchParams: URLSearchParams;
  searchField: RefObject<HTMLInputElement>;
  handleSubmit: (e: FormEvent) => void;
} => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchField = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (typeof searchField.current?.value === 'string' && !loader) {
        const searchValue = searchField.current?.value.trim();
        navigate(`/?page=1&search=${searchValue}`);
      }
    },
    [loader, navigate],
  );

  return { searchParams, searchField, handleSubmit };
};
