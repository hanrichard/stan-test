import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
import { Series } from './features/Series';
import { Movies } from './features/Movies';
import { Layout } from './components/layout/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
