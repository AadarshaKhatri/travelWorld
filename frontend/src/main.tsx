import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/ProtectedRouting/Protected.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
     </AuthContextProvider>
  </StrictMode>,
);


