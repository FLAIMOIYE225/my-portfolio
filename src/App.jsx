// import { useState } from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/common/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About'
import Experience from './pages/Experience';
import ContactModal from './pages/ContactModal';
import Footer from './components/common/Footer.jsx'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  useEffect(() => {
    const isArabic = language.startsWith('ar');
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : language;
  }, [language]);

  return (
    <>
      <div className='main-content'>
        <Header 
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Home/>
        <Projects/>
        <Skills/>
        <About/>
        <Experience/>
        {/* Insertion du composant ContactModal */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
        <Footer/>
      </div>
    </>
  )
}

export default App
