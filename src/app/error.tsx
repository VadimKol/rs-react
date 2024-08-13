'use client';

import Image from 'next/image';
import { type ReactNode } from 'react';

import error_img from '@/assets/images/loader.png';
import { useTheme } from '@/hooks/useTheme';

import styles from './error.module.scss';

export default function ErrorPage({ error }: { error: Error & { digest?: string } }): ReactNode {
  const { theme } = useTheme();

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <div className={styles.error}>
        <p className={styles.name}>ERROR</p>
        <Image className={styles.error_img} src={error_img} alt="Rick and Morty error" width={500} height={500} />
        <p className={styles.desc}>{error?.message}</p>
        <p className={styles.desc}>Please refresh the page</p>
      </div>
    </main>
  );
}
