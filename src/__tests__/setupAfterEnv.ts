import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

export const mockRouterPush = jest.fn((arg: string): string => arg);

jest.mock('next/navigation', () => ({
  ...jest.requireActual<object>('next/navigation'),
  useSearchParams: jest.fn(() => ({
    get: (): string => '',
  })),
  useRouter: jest.fn(() => ({
    push: mockRouterPush,
    replace: jest.fn(),
  })),
  usePathname: jest.fn((): string => ''),
}));
