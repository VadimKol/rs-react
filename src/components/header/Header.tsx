import { type ReactNode } from 'react';

import styles from './styles.module.scss';

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <h1 className={styles.container}>Forms</h1>
    </header>
  );
}
