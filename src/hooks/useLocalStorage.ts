import { useEffect, useState } from 'react';

export function useLocalStorage(key: string): [string, (ls: string) => void] {
  const [ls, setLs] = useState(typeof window === 'undefined' ? '' : localStorage.getItem(key) || '');

  useEffect(() => localStorage.setItem(key, ls), [key, ls]);

  return [ls, setLs];
}
