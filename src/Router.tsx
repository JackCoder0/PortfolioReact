import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/index';
import { ToggleThemeType } from './@types/types';

interface RouterProps {
  toggleTheme: ToggleThemeType;
}

export function Router({ toggleTheme }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout toggleTheme={toggleTheme} />} />
    </Routes >
  )
}