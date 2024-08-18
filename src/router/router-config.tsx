import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from '@/App';
import { ErrorPage } from '@/components/error/ErrorPage';
import { NoMatch } from '@/components/no-match/NoMatch';
import { Main } from '@/pages/main/Main';
import { Rhf } from '@/pages/rhf/Rhf';
import { Uncontrolled } from '@/pages/uncontrolled/Uncontrolled';

const routerConfig = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Main />} />
      <Route path="/uncontrolled" element={<Uncontrolled />} />
      <Route path="/rhf" element={<Rhf />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Route>,
);

export const router = createBrowserRouter(routerConfig);
