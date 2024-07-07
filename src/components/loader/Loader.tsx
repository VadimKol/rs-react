import { Component, type ReactNode } from 'react';

import styles from './styles.module.scss';

export class Loader extends Component {
  public render(): ReactNode {
    return <div className={styles.loader} />;
  }
}
