import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';

import { store } from './store/store';

export function App(): ReactNode {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}
