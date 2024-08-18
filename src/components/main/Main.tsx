import { type ReactNode } from 'react';

export function Main(): ReactNode {
  const theme = 'dark';

  return <main className={theme === 'dark' ? 'main' : 'main light'} />;
}
