import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';

import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
}
