import { type ReactNode } from 'react';

import styles from './styles.module.scss';

export function Footer(): ReactNode {
  const theme = 'dark';

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${theme === 'dark' ? styles.dark_rs : styles.light_rs}`} />
    </footer>
  );
}
