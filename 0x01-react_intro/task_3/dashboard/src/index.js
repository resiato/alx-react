import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Notifications } from './Notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
