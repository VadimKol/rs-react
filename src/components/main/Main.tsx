'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type MouseEventHandler, type ReactNode, useEffect } from 'react';
import { type Character } from 'rickmortyapi';

import { Flyout } from '@/components/flyout/Flyout';
import { Results } from '@/components/results/Results';
import { Search } from '@/components/search/Search';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTheme } from '@/hooks/useTheme';

import styles from './styles.module.scss';

export function Main({
  charactersData: { characters, total },
  children,
}: {
  charactersData: { characters: Character[]; total: number };
  children?: ReactNode;
}): ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Math.floor(Number(searchParams.get('page'))) || 1;
  const search = searchParams.get('search');
  const [ls, setLs] = useLocalStorage('R&M_search');
  const characterID = pathname.replace('/character/', '');
  const { theme } = useTheme();
  const loader = false;

  useEffect(() => {
    if (search !== null) {
      setLs(search);
    } else if (ls.length > 0) {
      router.replace(`/?page=${page}&search=${ls}`);
    }
  }, [search, setLs, ls, router, page]);

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      router.push(`/?page=${page}&search=${search}`);
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'} onClick={handleClose} role="presentation">
      <section onClick={handleClose}>
        <Search loader={loader} />
      </section>
      <section className={styles.results} onClick={handleClose}>
        <div className={characterID !== '/' ? styles.character : styles.results_box}>
          <Results characters={characters} total={total} characterID={String(characterID)} handleClose={handleClose} />
          {children}
        </div>
      </section>
      <Flyout />
    </main>
  );
}
