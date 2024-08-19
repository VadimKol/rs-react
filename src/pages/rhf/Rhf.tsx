import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { type ReactNode } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { convertToBase64, getPasswordStrength } from '@/common/utils';
import { CustomButton } from '@/components/custom-button/СustomButton';
import { useCountries } from '@/store/countriesSlice';
import { updateFormRhf, useFormRhfInfo } from '@/store/formRhfSlice';

import { type FormSchemaRhf, formSchemaRhf } from './schema';
import styles from './styles.module.scss';

export function Rhf(): ReactNode {
  const theme = 'dark';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useCountries();
  const formInfo = useFormRhfInfo();
  const {
    register,
    watch,
    getFieldState,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormSchemaRhf>({ mode: 'onChange', resolver: yupResolver(formSchemaRhf) });

  const image = watch('image') as FileList;
  const { isDirty } = getFieldState('password');

  let passwordStrength = '2';
  if (isDirty) {
    if (errors.password) {
      passwordStrength = String(errors.password.message?.split(',').length);
    } else {
      passwordStrength = '0';
    }
  }

  const onSubmit: SubmitHandler<FormSchemaRhf> = (data) => {
    const imageFileList = data.image as FileList;
    const imageFile = imageFileList.item(0);

    if (imageFile) {
      convertToBase64(imageFile)
        .then((base64Image) => {
          dispatch(
            updateFormRhf({
              name: String(data.name),
              age: Number(data.age),
              email: String(data.email),
              password: String(data.password),
              confirmPassword: true,
              gender: String(data.gender),
              country: String(data.country),
              tc: Boolean(data.tc),
              image: base64Image,
              strength: '0',
            }),
          );
          navigate('/', { state: true });
        })
        .catch(() => {});
    }
  };

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <Link className={styles.back} to="/">
        Main
      </Link>
      <h2 className={styles.title}>React hook form</h2>
      <form
        className={styles.uncontrolled}
        onSubmit={(e) => {
          handleSubmit(onSubmit)(e).catch(() => {});
        }}
      >
        <label htmlFor="name" className={styles.label}>
          Name*
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            className={styles.input}
            {...register('name')}
            defaultValue={formInfo.name || ''}
          />
        </label>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        <label htmlFor="age" className={styles.label}>
          Age*
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            className={styles.input}
            {...register('age')}
            defaultValue={formInfo.age || ''}
          />
        </label>
        {errors.age && <p className={styles.error}>{errors.age.message}</p>}
        <label htmlFor="email" className={styles.label}>
          Email*
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            className={styles.input}
            {...register('email')}
            defaultValue={formInfo.email || ''}
          />
        </label>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <label htmlFor="password" className={styles.label}>
          Password*
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            className={styles.input}
            {...register('password')}
            defaultValue={formInfo.password || ''}
          />
        </label>
        {errors.password && <p className={styles.error}>{errors.password.message?.split(',')[0]}</p>}
        <p className={styles.strength}>Password strength: {getPasswordStrength(passwordStrength)}</p>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password*
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            {...register('confirmPassword')}
            defaultValue={formInfo.password || ''}
          />
        </label>
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
        <fieldset>
          <legend>Gender*</legend>
          <div className={styles.gender}>
            <label htmlFor="male" className={styles.gender_label}>
              Male
              <input
                id="male"
                type="radio"
                className={styles.radio}
                value="male"
                {...register('gender')}
                defaultChecked={formInfo.gender !== 'female'}
              />
            </label>
            <label htmlFor="female" className={styles.gender_label}>
              Female
              <input
                id="female"
                type="radio"
                className={styles.radio}
                value="female"
                {...register('gender')}
                defaultChecked={formInfo.gender === 'female'}
              />
            </label>
          </div>
        </fieldset>
        {errors.gender && <p className={styles.error}>{errors.gender.message}</p>}
        <label htmlFor="country" className={styles.label}>
          Select country*
          <input
            id="country"
            list="countries"
            placeholder="Enter country"
            className={classNames(styles.input, styles.country)}
            {...register('country')}
            defaultValue={formInfo.country || ''}
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
        </label>
        {errors.country && <p className={styles.error}>{errors.country.message}</p>}
        <label htmlFor="upload" className={styles.upload}>
          Upload picture (2mb max, only .jpeg(.jpg) and .png)*
          <input id="upload" type="file" className={styles.file} {...register('image')} />
          {image && <span className={styles.loaded}>{image.item(0)?.name || ''}</span>}
        </label>
        {errors.image && <p className={styles.error}>{errors.image.message}</p>}
        <label htmlFor="tc" className={styles.tc}>
          I have read and agreed to the Terms and Conditions*
          <input
            id="tc"
            type="checkbox"
            className={styles.tc_input}
            {...register('tc')}
            defaultChecked={Boolean(formInfo.tc)}
          />
        </label>
        {errors.tc && <p className={styles.error}>{errors.tc.message}</p>}
        <div className={styles.buttons}>
          <CustomButton type="submit" className={styles.submit} isDisabled={!isValid}>
            Submit
          </CustomButton>
        </div>
      </form>
    </main>
  );
}
