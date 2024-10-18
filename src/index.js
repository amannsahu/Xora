import React from 'react';
import { createRoot } from 'react-dom/client';  // Import from react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root and render the app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
