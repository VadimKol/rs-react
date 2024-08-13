'use client';

import { type ReactNode } from 'react';

import ErrorPage from './error';

export default function GlobalErrorPage({ error }: { error: Error & { digest?: string } }): ReactNode {
  return (
    <html lang="en">
      <body className="body">
        <ErrorPage error={error || new Error('Something went wrong')} />
      </body>
    </html>
  );
}
