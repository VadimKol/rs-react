import { Component, type ReactNode } from 'react';

import styles from './styles.module.scss';

export class Header extends Component {
  public render(): ReactNode {
    return (
      <header className={styles.header}>
        <div className={styles.container} />
      </header>
    );
  }
}
