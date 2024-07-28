import { type ReactNode, useEffect, useState } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import error_img from '@/assets/images/loader.png';
import { useTheme } from '@/hooks/useTheme';

import styles from './styles.module.scss';

export function ErrorPage(): ReactNode {
  const error = useRouteError();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { theme } = useTheme();

  useEffect(() => {
    if (error) {
      if (isRouteErrorResponse(error)) {
        setErrorMessage(error.statusText);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(String(error));
      }
    }
  }, [error]);

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <div className={styles.error}>
        <p className={styles.name}>ERROR</p>
        <img className={styles.error_img} src={error_img} alt="Rick and Morty error" width={500} height={500} />
        <p className={styles.desc}>{errorMessage}</p>
        <p className={styles.desc}>Please refresh the page</p>
      </div>
    </main>
  );
}
