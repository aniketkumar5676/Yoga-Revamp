import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { BookingModalProvider } from './contexts/BookingModalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <BookingModalProvider>
        <App />
      </BookingModalProvider>
    </HashRouter>
  </React.StrictMode>,
);