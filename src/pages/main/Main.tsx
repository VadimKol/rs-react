import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export function Main(): ReactNode {
  const theme = 'dark';

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <section className={styles.links}>
        <Link className={styles.link} to="/uncontrolled">
          Uncontrolled Form
        </Link>
        <Link className={styles.link} to="/rhf">
          React hook form
        </Link>
      </section>
    </main>
  );
}
