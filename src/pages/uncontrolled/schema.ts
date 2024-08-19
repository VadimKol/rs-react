import { boolean, mixed, number, object, ref, string } from 'yup';

import { countries } from '@/common/countries';
import { FILE_SIZE, SUPPORTED_FORMATS } from '@/common/utils';

export const formSchema = object({
  name: string().matches(
    /^[A-Z]{1}[A-Za-z]*$/,
    'Must contain at least first uppercase letter and no special characters or numbers',
  ),
  age: number().positive('Age must be positive number').integer('Age must be integer'),
  email: string().email('Email address must be properly formatted (e.g., user@example.com)'),
  password: string()
    .min(8, 'Minimum 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*(),.?":{}|<>_\-\\[\]]/, 'Password must contain at least one special character')
    .test('Trim', 'Password must not contain leading or trailing whitespace.', (val) => {
      if (val) {
        return val[0] !== ' ' && val[val.length - 1] !== ' ';
      }
      return false;
    }),
  confirmPassword: string().oneOf([ref('password')], 'Passwords must match'),
  gender: string().required('You must select gender'),
  country: string().test('Country', 'You must select country', (val) => {
    if (val) {
      return countries.some((country) => country === val);
    }
    return false;
  }),
  tc: boolean().oneOf([true], 'You must accept the terms and conditions'),
  image: mixed()
    .required('An image is required')
    .test('Size', 'File is too large', (value) => {
      if (value instanceof File) {
        return value.size <= FILE_SIZE;
      }
      if (value instanceof FileList) {
        return (value.item(0)?.size || 0) <= FILE_SIZE;
      }
      return false;
    })
    .test('Format', 'Unsupported file format', (value) => {
      if (value instanceof File) {
        return SUPPORTED_FORMATS.includes(value.type);
      }
      if (value instanceof FileList) {
        return SUPPORTED_FORMATS.includes(value.item(0)?.type || '');
      }
      return false;
    }),
});
