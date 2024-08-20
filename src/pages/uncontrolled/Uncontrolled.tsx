import classNames from 'classnames';
import { type FormEvent, type ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';

import { convertToBase64, getPasswordStrength } from '@/common/utils';
import { CustomButton } from '@/components/custom-button/СustomButton';
import { useCountries } from '@/store/countriesSlice';
import { updateForm } from '@/store/formSLice';

import { formSchema } from './schema';
import styles from './styles.module.scss';

export function Uncontrolled(): ReactNode {
  const theme = 'dark';
  const navigate = useNavigate();
  const countries = useCountries();
  const [errors, setErrors] = useState<Record<string, string | null>>({
    name: null,
    age: null,
    email: null,
    password: null,
    confirmPassword: null,
    gender: null,
    country: null,
    tc: null,
    image: null,
    strength: '2',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      age: Number(formData.get('age')),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      gender: formData.get('gender'),
      country: formData.get('country'),
      tc: formData.get('tc') === 'on',
      image: formData.get('image'),
    };

    const errorsNew: Record<string, string | null> = {
      name: null,
      age: null,
      email: null,
      password: null,
      confirmPassword: null,
      gender: null,
      country: null,
      tc: null,
      image: null,
      strength: '0',
    };

    try {
      formSchema.validateSync(data, { abortEarly: false });

      convertToBase64(data.image as File)
        .then((base64Image) => {
          dispatch(
            updateForm({
              name: String(data.name),
              age: Number(data.age),
              email: String(data.email),
              password: String(data.password),
              confirmPassword: true,
              gender: String(data.gender),
              country: String(data.country),
              tc: data.tc,
              image: base64Image,
              strength: '0',
            }),
          );
          navigate('/', { state: true });
        })
        .catch(() => {});
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.forEach(({ path, message }) => {
          if (path) {
            errorsNew[path] = message;
          }
          if (path === 'password') {
            errorsNew.strength = String(Number(errorsNew.strength) + 1);
          }
        });
      }
    } finally {
      setErrors(errorsNew);
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <Link className={styles.back} to="/">
        Main
      </Link>
      <h2 className={styles.title}>Uncontrolled Form</h2>
      <form className={styles.uncontrolled} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name*
          <input id="name" name="name" type="text" placeholder="Enter Name" className={styles.input} />
        </label>
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <label htmlFor="age" className={styles.label}>
          Age*
          <input id="age" name="age" type="number" placeholder="Enter Age" className={styles.input} />
        </label>
        {errors.age && <p className={styles.error}>{errors.age}</p>}
        <label htmlFor="email" className={styles.label}>
          Email*
          <input id="email" name="email" type="text" placeholder="Enter Email" className={styles.input} />
        </label>
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <label htmlFor="password" className={styles.label}>
          Password*
          <input id="password" name="password" type="password" placeholder="Enter Password" className={styles.input} />
        </label>
        <p className={styles.strength}>Password strength: {getPasswordStrength(errors.strength || '2')}</p>
        {errors.password && <p className={styles.error}>{errors.password}</p>}
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
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
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
        {errors.gender && <p className={styles.error}>{errors.gender}</p>}
        <label htmlFor="country" className={styles.label}>
          Select country*
          <input
            id="country"
            name="country"
            list="countries"
            placeholder="Enter country"
            className={classNames(styles.input, styles.country)}
            autoComplete="off"
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
        </label>
        {errors.country && <p className={styles.error}>{errors.country}</p>}
        <label htmlFor="upload">
          Upload picture (2mb max, only .jpeg(.jpg) and .png)*
          <input id="upload" name="image" type="file" />
        </label>
        {errors.image && <p className={styles.error}>{errors.image}</p>}
        <label htmlFor="tc" className={styles.tc}>
          I have read and agreed to the Terms and Conditions*
          <input id="tc" name="tc" type="checkbox" className={styles.tc_input} />
        </label>
        {errors.tc && <p className={styles.error}>{errors.tc}</p>}
        <div className={styles.buttons}>
          <CustomButton type="submit" className={styles.submit}>
            Submit
          </CustomButton>
        </div>
      </form>
    </main>
  );
}
