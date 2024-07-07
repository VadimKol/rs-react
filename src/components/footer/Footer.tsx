import { Component, type ReactNode } from 'react';

import styles from './styles.module.scss';

export class Footer extends Component {
  public render(): ReactNode {
    return (
      <footer className={styles.footer}>
        <div className={styles.container} />
      </footer>
    );
  }
}
