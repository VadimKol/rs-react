import { nanoid } from '@reduxjs/toolkit';
import { type ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPasswordStrength } from '@/common/utils';
import { ImageBlock } from '@/components/image-block/ImageBlock';
import { Loader } from '@/components/loader/Loader';
import { useFormInfo } from '@/store/formSLice';

import styles from './styles.module.scss';

export function Main(): ReactNode {
  const theme = 'dark';
  const forms = useFormInfo();
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
      {forms.map((form, index) =>
        index === forms.length - 1 && loader ? (
          <Loader key={`${nanoid()}`} />
        ) : (
          <div key={`${nanoid()}`} className={loader ? `${styles.forms} ${styles.forms_loader}` : styles.forms}>
            <section className={styles.uncontrolled}>
              <div className={styles.form_info}>
                <p className={styles.text}>Name: {form.name}</p>
                <p className={styles.text}>Age: {form.age}</p>
                <p className={styles.text}>Email: {form.email}</p>
                <p className={styles.text}>Password: {'*'.repeat(form.password?.length || 0)}</p>
                <p className={styles.text}>Password strength: {getPasswordStrength(form.strength)}</p>
                <p className={styles.text}>Gender: {form.gender}</p>
                <p className={styles.text}>Country: {form.country}</p>
                <p className={styles.text}>TC: agreed</p>
                <ImageBlock src={form.image || ''} alt="Form data" />
              </div>
            </section>
          </div>
        ),
      )}
    </main>
  );
}
