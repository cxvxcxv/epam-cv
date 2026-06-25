import { BrowserRouter, Route, Routes } from 'react-router';
import { InnerLayout } from './layouts/InnerLayout';
import { Home } from './pages/Home';
import { Inner } from './pages/Inner';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<InnerLayout />}>
          <Route path="/inner" element={<Inner />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
