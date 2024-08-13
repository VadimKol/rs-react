import Image from 'next/image';
import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

import error_img from '@/assets/images/404.png';
import { CustomButton } from '@/components/custom-button/СustomButton';
import { useTheme } from '@/hooks/useTheme';

import styles from './404.module.scss';

export default function NoMatch(): ReactNode {
  const { replace } = useRouter();
  const { theme } = useTheme();

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <Image className={styles.error_img} src={error_img} alt="404 error" width={490} height={490} />
      <div className={styles.buttons}>
        <CustomButton
          className={styles.home}
          onClick={() => {
            replace('/');
          }}
        >
          Home page
        </CustomButton>
      </div>
    </main>
  );
}
