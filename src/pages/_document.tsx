import { Head, Html, Main, NextScript } from 'next/document';
import { type ReactNode } from 'react';

export default function Document(): ReactNode {
  return (
    <Html lang="en">
      <Head />
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
