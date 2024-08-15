import { useLocation, useNavigate, useNavigation, useSearchParams } from '@remix-run/react';
import { type MouseEventHandler, type ReactNode, useEffect } from 'react';
import { type Character } from 'rickmortyapi';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTheme } from '@/hooks/useTheme';

import { Flyout } from '../flyout/Flyout';
import { Results } from '../results/Results';
import { Search } from '../search/Search';
import styles from './styles.module.scss';

export function Main({
  charactersData: { characters, total },
  children,
}: {
  charactersData: { characters: Character[]; total: number };
  children?: ReactNode;
}): ReactNode {
  const [searchParams] = useSearchParams();
  const page = Math.floor(Number(searchParams.get('page'))) || 1;
  const [ls, setLs] = useLocalStorage('R&M_search');
  const { pathname } = useLocation();
  const characterID = pathname.replace('/character/', '');
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { state } = useNavigation();
  const loader = state === 'loading';
  const search = searchParams.get('search');

  useEffect(() => {
    if (search !== null) {
      setLs(search);
    } else if (ls.length > 0) {
      navigate(`/?page=${page}&search=${ls}`, { replace: true });
    }
  }, [search, setLs, ls, navigate, page]);

  if (characterID !== '/' && (/\D/.test(characterID) || characterID.startsWith('0'))) {
    navigate('*', { replace: true });
    return null;
  }

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget && characterID !== '/') {
      navigate(`/?page=${page}&search=${search}`);
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'} onClick={handleClose} role="presentation">
      <section onClick={handleClose}>
        <Search loader={loader} />
      </section>
      <section className={styles.results} onClick={handleClose}>
        <div className={characterID !== '/' ? styles.character : styles.results_box}>
          {loader ? (
            <div className={styles.loader} />
          ) : (
            <>
              <Results characters={characters} total={total} characterID={characterID} handleClose={handleClose} />
              {children}
            </>
          )}
        </div>
      </section>
      <Flyout />
    </main>
  );
}
