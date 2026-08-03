import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import VBStorePage from './pages/VBStorePage';
import MarketingPage from './pages/MarketingPage';
import AutomationPage from './pages/AutomationPage';
import GitHubPage from './pages/GitHubPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import OtherProjectsPage from './pages/OtherProjectsPage';

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/vb-store" element={<VBStorePage />} />
            <Route path="/projects/marketing" element={<MarketingPage />} />
            <Route path="/projects/automation" element={<AutomationPage />} />
            <Route path="/projects/other" element={<OtherProjectsPage />} />
            <Route path="/github" element={<GitHubPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
