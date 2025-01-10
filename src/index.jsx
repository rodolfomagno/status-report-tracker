import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import StatusTracker from './components/StatusTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StatusTracker />
  </React.StrictMode>
);