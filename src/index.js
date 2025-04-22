import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { ThemeProvider } from "./context";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);