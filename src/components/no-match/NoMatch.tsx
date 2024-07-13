import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import error_img from '@/assets/images/404.png';

import { CustomButton } from '../custom-button/СustomButton';
import styles from './styles.module.scss';

export function NoMatch(): ReactNode {
  const navigate = useNavigate();

  return (
    <main className="main">
      <img className={styles.error_img} src={error_img} alt="404 error" width={490} height={490} />
      <div className={styles.buttons}>
        <CustomButton onClick={() => navigate(-1)}>Previous page</CustomButton>
        <CustomButton onClick={() => navigate('/')}>Home page</CustomButton>
      </div>
    </main>
  );
}
