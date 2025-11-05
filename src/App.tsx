import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import StoriesPage from './pages/StoriesPage';
import BlogPostPage from './pages/BlogPostPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import TamasyaCerita from './pages/program/TamasyaCerita';
import VisitPage from './pages/VisitPage';
import HeritagePage from './pages/visit/HeritagePage';
import WorkshopPage from './pages/visit/WorkshopPage';
import MarketPage from './pages/visit/MarketPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/stories/:slug" element={<BlogPostPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/programs/tamasya-cerita" element={<TamasyaCerita />} />
      <Route path="/visit" element={<VisitPage />} />
      <Route path="/visit/heritage" element={<HeritagePage />} />
      <Route path="/visit/workshop" element={<WorkshopPage />} />
      <Route path="/visit/market" element={<MarketPage />} />
    </Routes>
  );
}

export default App;