import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Default to dark mode for a tech-inspired AI/ML specialist vibe!
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#020617] dark:text-slate-100 transition-colors duration-300 selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Primary Landing Page Flow */}
      <main id="main-content">
        {/* Hero Banner Grid & Ticker */}
        <Hero />

        {/* Bio, Education Timeline, and Dynamic Progress Deck */}
        <About />

        {/* Corporate ML Internship Timeline */}
        <Experience />

        {/* Interactive Filterable Projects with Detail Modal */}
        <Projects />

        {/* Credentials and Certifications Carousel Grid */}
        <Certifications />

        {/* Multi-input Form Panel with AnimatePresence Status */}
        <Contact />
      </main>

      {/* Footer Credentials */}
      <Footer />
    </div>
  );
}
