import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

jest.mock('next/router', () => jest.requireActual<object>('next-router-mock'));
