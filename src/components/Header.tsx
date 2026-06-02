import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Terminal, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on offset
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            id="logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 text-slate-900 dark:text-white"
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight uppercase">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-500 dark:text-cyan-400 font-semibold">
                AI / ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`nav-${item.href.slice(1)}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 dark:text-slate-350 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-900/50"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-3 border-l border-slate-200 dark:border-slate-805 pl-4">
            {/* Theme Toggle */}
            <button
              id="desktop-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-705 dark:text-slate-300 hover:text-cyan-550 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Social Shortcut Buttons */}
            <a
              id="linkedin-shortcut"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              id="github-shortcut"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Interactive Mobile Control Buttons */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              id="mobile-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  id={`mobile-nav-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? "bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 font-semibold border-l-4 border-cyan-500 pl-2"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex items-center justify-around border-t border-slate-100 dark:border-slate-900">
                <a
                  id="mobile-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  id="mobile-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
