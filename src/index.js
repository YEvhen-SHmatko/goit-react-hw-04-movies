import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PNotifyBrightTheme from 'pnotify/dist/PNotifyBrightTheme.css';
import App from './components/App/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Route component={<App className={PNotifyBrightTheme} />} />
  </BrowserRouter>,
  document.getElementById('root'),
);
