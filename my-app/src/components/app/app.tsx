import { lazy, Suspense } from 'react';

import Spinner from '../common/spinner/spinner';
import { Routes, Route } from '../common/common';
import { appTheme } from './common';
import { ThemeProvider } from 'styled-components';

import { AppRoute } from '../../utils/const';

import { Loader } from '../common/spinner/spinner.styled';
import * as S from './app.styled';

const Home = lazy(() => import('../../pages/home/home'));
const DetailedQuest = lazy(
  () => import('../../pages/detailed-quest/detailed-quest'),
);
const Contacts = lazy(() => import('../../pages/contacts/contacts'));
const NotFound = lazy(() => import('../../pages/not-found/not-found'));

const App = () => (
  <Suspense
    fallback={
      <Spinner>
        <Loader />
      </Spinner>
    }
  >
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
        <Route index element={<Home />} />
        <Route path={`${AppRoute.Quest}/:id`} element={<DetailedQuest />} />
        <Route path={AppRoute.Contacts} element={<Contacts />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  </Suspense>
);

export default App;
