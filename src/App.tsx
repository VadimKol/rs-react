import { Component, type ReactNode } from 'react';

import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';

import { Main } from './components/main/Main';

export class App extends Component {
  public render(): ReactNode {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
