import classNames from 'classnames';
import { type FormEvent, type ReactNode } from 'react';

import { countries } from '@/common/countries';
import { CustomButton } from '@/components/custom-button/СustomButton';

import styles from './styles.module.scss';

export function Uncontrolled(): ReactNode {
  const theme = 'dark';

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <h2 className={styles.title}>Uncontrolled Form</h2>
      <form className={styles.uncontrolled} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name*
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            className={styles.input}
            /* required
            pattern="^[A-Z]{1}\w*" */
          />
        </label>
        <label htmlFor="age" className={styles.label}>
          Age*
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            className={styles.input}
            /* min="0"
            max="1000"
            inputMode="numeric"
            required */
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email*
          <input id="email" type="text" placeholder="Enter Email" className={styles.input} />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password*
          <input id="password" type="password" placeholder="Enter Password" className={styles.input} />
        </label>
        <label htmlFor="password_confirm" className={styles.label}>
          Confirm Password*
          <input id="password_confirm" type="password" placeholder="Confirm Password" className={styles.input} />
        </label>
        <fieldset>
          <legend>Gender*</legend>
          <div className={styles.gender}>
            <label htmlFor="male" className={styles.gender_label}>
              Male
              <input id="male" type="radio" className={styles.radio} name="gender" />
            </label>
            <label htmlFor="female" className={styles.gender_label}>
              Female
              <input id="female" type="radio" className={styles.radio} name="gender" />
            </label>
          </div>
        </fieldset>
        <label htmlFor="country" className={styles.label}>
          Select country*
          <input
            id="country"
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
          <input id="upload" type="file" className={styles.file} />
          <span className={styles.loaded}>loaded 2 mb</span>
        </label>
        <label htmlFor="tc" className={styles.tc}>
          I have read and agreed to the Terms and Conditions*
          <input id="tc" type="checkbox" className={styles.tc_input} />
        </label>
        {/* {errors&&<p>{errors.message}</p>} */}
        <div className={styles.buttons}>
          <CustomButton type="submit" className={styles.submit}>
            Submit
          </CustomButton>
        </div>
      </form>
    </main>
  );
}
