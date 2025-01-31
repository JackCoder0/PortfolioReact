import { useState } from 'react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';


export function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
      <Router toggleTheme={toggleTheme} />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}