import { type ReactNode } from 'react';
// import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';

import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
// import { store } from './store/store';

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      {/* <Provider store={store}> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </Provider> */}
    </ErrorBoundary>
  );
}
