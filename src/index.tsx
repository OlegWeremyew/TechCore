import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/reduxStore';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<h1>Loading</h1>}>
        <App />
      </Suspense>
    </HashRouter>
  </Provider>,
);
