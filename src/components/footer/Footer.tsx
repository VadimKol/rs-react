'use client';

import { type ReactNode } from 'react';

import { useTheme } from '@/hooks/useTheme';

import styles from './styles.module.scss';

export function Footer(): ReactNode {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${theme === 'dark' ? styles.dark_rs : styles.light_rs}`} />
    </footer>
  );
}
