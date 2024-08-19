import { type ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPasswordStrength } from '@/common/utils';
import { ImageBlock } from '@/components/image-block/ImageBlock';
import { Loader } from '@/components/loader/Loader';
import { useFormInfo } from '@/store/formSLice';

import styles from './styles.module.scss';

export function Main(): ReactNode {
  const theme = 'dark';
  const { name, age, email, password, gender, country, image, strength } = useFormInfo();
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setLoader(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
  }, [loader]);

  const uncontrolled = Boolean(name) && (
    <section className={styles.uncontrolled}>
      <h2 className={styles.title}>Uncontrolled Form</h2>
      <div className={styles.form_info}>
        <p className={styles.text}>Name: {name}</p>
        <p className={styles.text}>Age: {age}</p>
        <p className={styles.text}>Email: {email}</p>
        <p className={styles.text}>Password: {'*'.repeat(password?.length || 0)}</p>
        <p className={styles.text}>Password strength: {getPasswordStrength(strength)}</p>
        <p className={styles.text}>Gender: {gender}</p>
        <p className={styles.text}>Country: {country}</p>
        <ImageBlock src={image || ''} alt="Form data" />
      </div>
    </section>
  );

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <section className={loader ? `${styles.links} ${styles.links_loader}` : styles.links}>
        <Link className={styles.link} to="/uncontrolled">
          Uncontrolled Form
        </Link>
        <Link className={styles.link} to="/rhf">
          React hook form
        </Link>
      </section>
      {loader ? <Loader /> : uncontrolled}
    </main>
  );
}
