'use client';

import { type ReactNode } from 'react';

import { useTheme } from '@/hooks/useTheme';

import styles from './styles.module.scss';

export function Header(): ReactNode {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container} />
      <button
        className={`${styles.theme} ${theme === 'dark' ? styles.button_dark : styles.button_light}`}
        type="button"
        aria-label="Theme switcher"
        onClick={toggleTheme}
      />
    </header>
  );
}
