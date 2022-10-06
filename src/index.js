import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals'
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './container/AppContainer';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);

reportWebVitals();