// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react';
import { Fonts } from "./assets/Components/Fonts";
import theme from './assets/Components/Theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    <Global styles={Fonts} />
    <App />
  </ChakraProvider>
  // </React.StrictMode>
)
