import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';

import { Main } from './components/main/Main';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
