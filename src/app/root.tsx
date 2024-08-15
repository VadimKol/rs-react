import './root.scss';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@/components/error-boundary/ErrorBoundary';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { ThemeProvider } from '@/contexts/theme';
import { store } from '@/store/store';

export default function App(): ReactNode {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./src/assets/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="./src/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Rick and Morty</title>
        <Meta />
        <Links />
      </head>
      <body className="body">
        <div id="root" className="root">
          <ErrorBoundary>
            <ThemeProvider>
              <Provider store={store}>
                <Header />
                <Outlet />
                <Footer />
              </Provider>
            </ThemeProvider>
          </ErrorBoundary>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
