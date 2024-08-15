import { useNavigate } from '@remix-run/react';
import { type ReactNode } from 'react';

import error_img from '@/assets/images/404.png';
import { useTheme } from '@/hooks/useTheme';

import { CustomButton } from '../custom-button/СustomButton';
import styles from './styles.module.scss';

export function NoMatch(): ReactNode {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <img className={styles.error_img} src={error_img} alt="404 error" width={490} height={490} />
      <div className={styles.buttons}>
        <CustomButton
          className={styles.home}
          onClick={() => {
            navigate('/');
          }}
        >
          Home page
        </CustomButton>
      </div>
    </main>
  );
}
