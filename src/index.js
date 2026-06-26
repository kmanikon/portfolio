import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function waitForCssLoad(callback) {
  if (process.env.NODE_ENV === 'development') {
    callback();
    return;
  }

  const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .filter((link) => !link.href.includes('fonts.googleapis.com'));

  if (links.length === 0) {
    callback();
    return;
  }

  let remaining = links.length;
  const checkReady = () => {
    remaining -= 1;
    if (remaining <= 0) callback();
  };

  links.forEach((link) => {
    if (link.sheet) {
      checkReady();
      return;
    }

    link.addEventListener('load', checkReady, { once: true });
    link.addEventListener('error', checkReady, { once: true });
  });
}

waitForCssLoad(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
