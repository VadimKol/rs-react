import './root.scss';

import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ErrorPage } from '@/components/error/ErrorPage';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { NoMatch } from '@/components/no-match/NoMatch';
import { ThemeProvider } from '@/contexts/theme';
import { store } from '@/store/store';

export function Layout({ children }: { children: ReactNode }): ReactNode {
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
          <ThemeProvider>
            <Provider store={store}>
              <Header />
              {children}
              <Footer />
            </Provider>
          </ThemeProvider>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): ReactNode {
  return <Outlet />;
}

export function ErrorBoundary(): ReactNode {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <NoMatch />;
  }

  return <ErrorPage error={error instanceof Error ? error : new Error('Something went wrong')} />;
}
