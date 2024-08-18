import { boolean, mixed, number, object, ref, string } from 'yup';

import { countries } from './countries';

const FILE_SIZE = 1024 * 1024 * 2;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

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
  image: object().shape({
    file: mixed()
      .required('An image is required')
      .test('Size', 'File is too large', (value) => {
        if (value instanceof File) {
          return value.size <= FILE_SIZE;
        }
        return false;
      })
      .test('Format', 'Unsupported file format', (value) => {
        if (value instanceof File) {
          return SUPPORTED_FORMATS.includes(value.type);
        }
        return false;
      }),
  }),
});

// parse and assert validity
// let user = await userSchema.validate(await fetchUser());

// type User = InferType<typeof userSchema>;

/* {
  name: string;
  age: number;
  email?: string | undefined
  website?: string | null | undefined
  createdOn: Date
} */
