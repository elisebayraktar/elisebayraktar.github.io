import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@/components/theme-provider'

import './index.css'

import App from './app'

const rootElement = document.querySelector('#root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
} else {
  throw new Error('Root element not found')
}
