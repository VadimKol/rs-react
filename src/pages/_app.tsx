import './global.scss';

import { type AppProps } from 'next/app';
import Head from 'next/head';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@/components/error-boundary/ErrorBoundary';
import { Footer } from '@/components/footer/Footer.tsx';
import { Header } from '@/components/header/Header.tsx';
import { ThemeProvider } from '@/contexts/theme';
import { wrapper } from '@/store/store';

export default function App({ Component, pageProps }: AppProps<object>): ReactNode {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <Head>
        <link rel="icon" href="icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="apple-icon.png" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rick and Morty</title>
      </Head>
      <ErrorBoundary>
        <ThemeProvider>
          <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}
