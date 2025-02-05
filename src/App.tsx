import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProposalPage from './components/ProposalPage';
import LoveLanguagesPage from './components/LoveLanguagesPage';
import GalleryPage from './components/GalleryPage';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalPage />} />
        <Route path="/love-languages" element={<LoveLanguagesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;