import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BygherrerPage from './pages/BygherrerPage';
import AnnoncoererPage from './pages/AnnoncoererPage';
import CasesPage from './pages/CasesPage';
import KontaktPage from './pages/KontaktPage';

import HandelsbetingelserPage from "@/pages/HandelsbetingelserPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bygherrer" element={<BygherrerPage />} />
        <Route path="/annoncoerer" element={<AnnoncoererPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/handelsbetingelser" element={<HandelsbetingelserPage />} />
      </Route>
    </Routes>
  );
}
