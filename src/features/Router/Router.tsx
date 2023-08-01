import { Route, Routes } from 'react-router-dom';
import { Search } from '@/pages/Search.tsx';
import { NotFound } from '@/pages/NotFound.tsx';
import { Layout } from '@/features/Layout';

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
