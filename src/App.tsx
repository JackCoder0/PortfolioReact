import { useEffect, useState } from 'react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  const storedTheme = localStorage.getItem("themeMode");
  const initialTheme = storedTheme ? storedTheme : "light";

  const [theme, setTheme] = useState<string>(initialTheme);
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("themeMode", newTheme);
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("themeMode");
    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Router toggleTheme={toggleTheme} />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}