import { type ReactNode } from 'react';

import styles from './styles.module.scss';

export function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.container} />
    </footer>
  );
}
