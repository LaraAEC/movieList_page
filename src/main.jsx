import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'; //importando o meu provedor de tema.
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth'; //importando do meu contexto AuthContext do arquivo auth.js a função provider dele.

import theme from './styles/theme'; //importando meu arquivo theme que contém meu tema css central.

import { Routes } from './routes'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
//FIGMA: https://www.figma.com/file/KCW1nVIAePrFiETnMesXoI/RocketMovies-(Copy)?node-id=0-1&t=nlc89ywdvYm5VZgi-0