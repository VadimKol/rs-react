import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';
import { Toast } from '@/components/toast/Toast.tsx';

import { Main } from './components/main/Main';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Toast />
    </>
  );
}
