import { type ReactNode, useEffect, useState } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import styles from './styles.module.scss';

export function ErrorPage(): ReactNode {
  const error = useRouteError();
  const [errorMessage, setErrorMessage] = useState('');
  const theme = 'dark';

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
        <p className={styles.desc}>{errorMessage}</p>
        <p className={styles.desc}>Please refresh the page</p>
      </div>
    </main>
  );
}
