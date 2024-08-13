import './global.scss';

import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import { ErrorBoundary } from '@/components/error-boundary/ErrorBoundary';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { ThemeProvider } from '@/contexts/theme';
import { StoreProvider } from '@/store/StoreProvider';

export const metadata: Metadata = { title: 'Rick and Morty' };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en">
      <body className="body">
        <ErrorBoundary>
          <ThemeProvider>
            <StoreProvider>
              <div className="root">
                <Header />
                {children}
                <Footer />
              </div>
            </StoreProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
