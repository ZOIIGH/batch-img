import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// In this specific project request, the core logic resides in index.html 
// to satisfy the "Single File HTML" requirement. 
// This file exists to satisfy the system prompt's React project structure requirements.

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}