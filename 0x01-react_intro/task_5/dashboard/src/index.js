import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);

reportWebVitals();
