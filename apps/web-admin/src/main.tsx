import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProviderWrapper } from '@homfo-client/util'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
    <React.StrictMode>
      <CookiesProviderWrapper>
        <App />
      </CookiesProviderWrapper>
    </React.StrictMode>
  </BrowserRouter>,
)
