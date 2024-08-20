import { boolean, type InferType, mixed, number, object, ref, string } from 'yup';

import { FILE_SIZE, SUPPORTED_FORMATS } from '@/common/utils';
import { selectCountries } from '@/store/countriesSlice';
import { store } from '@/store/store';

export const formSchemaRhf = object({
  name: string().matches(
    /^[A-Z]{1}[A-Za-z]*$/,
    'Must contain at least first uppercase letter and no special characters or numbers',
  ),
  age: number().positive('Age must be positive number').integer('Age must be integer'),
  email: string().email('Email address must be properly formatted (e.g., user@example.com)'),
  password: string().test('password', (value, testContext) => {
    const errors: string[] = [];

    if (!value || value.length < 8) {
      errors.push('Minimum 8 characters');
    }
    if (!/[a-z]/.test(value || '')) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[A-Z]/.test(value || '')) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[0-9]/.test(value || '')) {
      errors.push('Password must contain at least one digit');
    }
    if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]]/.test(value || '')) {
      errors.push('Password must contain at least one special character');
    }

    return errors.length > 0 ? testContext.createError({ message: errors.join(',') }) : true;
  }),
  confirmPassword: string().oneOf([ref('password')], 'Passwords must match'),
  gender: string().required('You must select gender'),
  country: string().test('Country', 'You must select country', (val) => {
    if (val) {
      return selectCountries(store.getState()).some((country) => country === val);
    }
    return false;
  }),
  tc: boolean().oneOf([true], 'You must accept the terms and conditions'),
  image: mixed()
    .required('An image is required')
    .test('Size', 'File is too large', (value) => {
      if (value instanceof FileList) {
        return (value.item(0)?.size || 0) <= FILE_SIZE;
      }
      return false;
    })
    .test('Format', 'Unsupported file format', (value) => {
      if (value instanceof FileList) {
        return SUPPORTED_FORMATS.includes(value.item(0)?.type || '');
      }
      return false;
    }),
});

export type FormSchemaRhf = InferType<typeof formSchemaRhf>;
