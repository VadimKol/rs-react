import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from '@/App';
import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { ErrorPage } from '@/components/error/ErrorPage';
import { Main } from '@/components/main/Main';
import { NoMatch } from '@/components/no-match/NoMatch';

const routerConfig = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Main />}>
        <Route path="character/:characterID" element={<DetailedCard />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Route>,
);

export const router = createBrowserRouter(routerConfig);
