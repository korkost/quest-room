import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './components/app/app';
import HistoryRouter from './components/history-router/history-route';
import { store } from './store/store';
import { fetchQuestsAction } from './store/quests-slice/quests-slice';
import { browserHistory } from './browser-history';

import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container!);

store.dispatch(fetchQuestsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
