import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'pnotify/dist/PNotifyBrightTheme.css';
import App from './components/App/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
