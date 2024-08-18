import { type ReactNode } from 'react';

export function Rhf(): ReactNode {
  const theme = 'dark';

  return (
    <main className={theme === 'dark' ? 'main' : 'main light'}>
      <p>Hello</p>
    </main>
  );
}
