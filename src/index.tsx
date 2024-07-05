import '@/index.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

document.body.classList.add('body');

const rootElement = document.createElement('div');

rootElement.className = 'root';
document.body.insertBefore(rootElement, document.body.firstChild);

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
