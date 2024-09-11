import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from './router/router.jsx';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={rootRouter}>
    <App />
  </RouterProvider>
)
