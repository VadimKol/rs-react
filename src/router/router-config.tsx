import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from '@/App';
import { ErrorPage } from '@/components/error/ErrorPage';
import { Main } from '@/components/main/Main';
import { NoMatch } from '@/components/no-match/NoMatch';

const routerConfig = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route errorElement={<ErrorPage />}>
      <Route index element={<Main />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Route>,
);

export const router = createBrowserRouter(routerConfig);
