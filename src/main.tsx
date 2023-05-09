import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './routes';

const idElement = document.getElementById('root');
const root = idElement && createRoot(idElement);
root &&
  root.render(
    <StrictMode>
      <Router />
    </StrictMode>,
  );
