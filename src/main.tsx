import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import 'lenis/dist/lenis.css';
import './styles/global.scss';
import App from './App';
import { CartProvider } from './store/cart';
import { UiProvider } from './store/ui';
import { SmoothScroll } from './lib/smooth-scroll';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <UiProvider>
        <CartProvider>
          <SmoothScroll>
            <App />
          </SmoothScroll>
        </CartProvider>
      </UiProvider>
    </BrowserRouter>
  </StrictMode>
);
