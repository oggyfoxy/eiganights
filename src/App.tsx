import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Barcode from './components/Barcode';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Library from './pages/Library';
import Profile from './pages/Profile';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Barcode />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Barcode />
      </div>
    </Router>
  );
};

export default App;
