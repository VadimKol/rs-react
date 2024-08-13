'use client';

import { type ReactNode } from 'react';

import { useTheme } from '@/hooks/useTheme';

import styles from './loading.module.scss';

export default function Loading(): ReactNode {
  const { theme } = useTheme();

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <div className={styles.loader} />
    </main>
  );
}
