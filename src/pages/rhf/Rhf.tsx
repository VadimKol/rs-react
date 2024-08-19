import classNames from 'classnames';
import { type FormEvent, type ReactNode, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ValidationError } from 'yup';

import { countries } from '@/common/countries';
import { formSchema } from '@/common/schema';
import { CustomButton } from '@/components/custom-button/СustomButton';

import styles from './styles.module.scss';

export function Rhf(): ReactNode {
  const theme = 'dark';
  const file = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      age: formData.get('age'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      gender: formData.get('gender'),
      country: formData.get('country'),
      tc: formData.get('tc') === 'on',
      image: formData.get('image'),
    };

    try {
      formSchema.validateSync(data);
    } catch (err) {
      if (err instanceof ValidationError) {
        const c = console;
        c.error('Validation errors:', err.errors);
      }
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <Link className={styles.back} to="/">
        Main
      </Link>
      <h2 className={styles.title}>React hook form</h2>
      <form className={styles.uncontrolled} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name*
          <input id="name" name="name" type="text" placeholder="Enter Name" className={styles.input} />
        </label>
        <label htmlFor="age" className={styles.label}>
          Age*
          <input id="age" name="age" type="number" placeholder="Enter Age" className={styles.input} />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email*
          <input id="email" name="email" type="text" placeholder="Enter Email" className={styles.input} />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password*
          <input id="password" name="password" type="password" placeholder="Enter Password" className={styles.input} />
        </label>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password*
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
          />
        </label>
        <fieldset>
          <legend>Gender*</legend>
          <div className={styles.gender}>
            <label htmlFor="male" className={styles.gender_label}>
              Male
              <input id="male" type="radio" className={styles.radio} name="gender" value="male" />
            </label>
            <label htmlFor="female" className={styles.gender_label}>
              Female
              <input id="female" type="radio" className={styles.radio} name="gender" value="female" />
            </label>
          </div>
        </fieldset>
        <label htmlFor="country" className={styles.label}>
          Select country*
          <input
            id="country"
            name="country"
            list="countries"
            placeholder="Enter country"
            className={classNames(styles.input, styles.country)}
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
        </label>
        <label htmlFor="upload" className={styles.upload}>
          Upload picture (2mb max, only .jpeg(.jpg) and .png)*
          <input id="upload" name="image" type="file" className={styles.file} ref={file} />
          {file.current && <span className={styles.loaded}>{file.current.type}</span>}
        </label>
        <label htmlFor="tc" className={styles.tc}>
          I have read and agreed to the Terms and Conditions*
          <input id="tc" name="tc" type="checkbox" className={styles.tc_input} />
        </label>
        <div className={styles.buttons}>
          <CustomButton type="submit" className={styles.submit}>
            Submit
          </CustomButton>
        </div>
      </form>
    </main>
  );
}
