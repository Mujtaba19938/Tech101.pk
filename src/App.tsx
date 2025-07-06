import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyTech101 from './components/WhyTech101';
import Courses from './components/Courses';
import CareerPathways from './components/CareerPathways';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import SoftwareDeveloper from './pages/careers/SoftwareDeveloper';
import DataScientist from './pages/careers/DataScientist';
import UXUIDesigner from './pages/careers/UXUIDesigner';
import DigitalMarketer from './pages/careers/DigitalMarketer';
import ScrollToTop from './components/ScrollToTop';
export function App() {
  return <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-secondary">
        <Routes>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/careers/software-developer" element={<SoftwareDeveloper />} />
          <Route path="/careers/data-scientist" element={<DataScientist />} />
          <Route path="/careers/uxui-designer" element={<UXUIDesigner />} />
          <Route path="/careers/digital-marketer" element={<DigitalMarketer />} />
          <Route path="/" element={<>
                <Header />
                <main id="main-content" className="flex-grow">
                  <Hero />
                  <About />
                  <WhyTech101 />
                  <Courses />
                  <CareerPathways />
                  <Contact />
                </main>
                <Footer />
              </>} />
        </Routes>
      </div>
    </BrowserRouter>;
}