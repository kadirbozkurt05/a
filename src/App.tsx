import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SyllableWorkPage from './pages/SyllableWorkPage';
import ResourcesPage from './pages/ResourcesPage';
import MathToolsPage from './pages/MathToolsPage';
import TimeplannerPage from './pages/TimeplannerPage';
import SolarSystemPage from './pages/SolarSystemPage'; // Add this line
import MemoryGamePage from './pages/games/MemoryGamePage';
import WordScramblePage from './pages/games/WordScramblePage';
import MathQuizPage from './pages/games/MathQuizPage';
import ExamsPage from './pages/ExamsPage';
import ExamPage from './pages/ExamPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimda" element={<AboutPage />} />
            <Route path="/hece-calismasi" element={<SyllableWorkPage />} />
            <Route path="/matematik-araclari" element={<MathToolsPage />} />
            <Route path="/zaman-planlayici" element={<TimeplannerPage />} />
            <Route path="/gunes-sistemi" element={<SolarSystemPage />} />
            <Route path="/kaynaklar" element={<ResourcesPage />} />
            <Route path="/sinif/:grade" element={<ResourcesPage />} />
            <Route path="/sinavlar" element={<ExamsPage />} />
            <Route path="/sinavlar/:grade" element={<ExamsPage />} />
            <Route path="/sinav/:examId" element={<ExamPage />} />
            <Route path="/oyunlar/hafiza" element={<MemoryGamePage />} />
            <Route path="/oyunlar/kelime-karistirma" element={<WordScramblePage />} />
            <Route path="/oyunlar/matematik-yarismasi" element={<MathQuizPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}