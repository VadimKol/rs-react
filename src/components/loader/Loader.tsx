import { type ReactNode } from 'react';

import styles from './styles.module.scss';

export function Loader(): ReactNode {
  return <div className={styles.loader} />;
}
