import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import theme from './styles/theme.js';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
