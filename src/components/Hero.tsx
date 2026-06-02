import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  ArrowRight,
  Mail,
  Phone,
  Download,
  MapPin,
  Cpu,
  Database,
  Award,
} from "lucide-react";
import { personalInfo } from "../data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-55/40 dark:bg-[#020617] border-b border-slate-200/50 dark:border-white/5"
    >
      {/* Decorative Network Grid / Matrix Ornaments (representing AI/ML) */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                className="text-slate-350 dark:text-slate-800"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Floating abstract Neural Network nodes for ML context */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[8%] w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info Columns */}
          <motion.div
            id="hero-intro"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center justify-center lg:justify-start space-x-2"
            >
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-cyan-150 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 rounded-full border border-cyan-200/50 dark:border-cyan-800/40 animate-pulse">
                🚀 Open to Job & Internships
              </span>
              <span className="hidden sm:inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 rounded-full">
                B.Tech (AI & ML)
              </span>
            </motion.div>

            {/* Display Headings */}
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-slate-500 dark:text-slate-400 font-mono text-sm tracking-widest uppercase font-medium"
              >
                Hello World, I'm
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-905 dark:text-white"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center lg:justify-start gap-2"
              >
                Specializing in{" "}
                <span className="text-cyan-500 dark:text-cyan-400">
                  AI & ML Engineering
                </span>
              </motion.h2>
            </div>

            {/* Biography Summary block */}
            <motion.p
              variants={itemVariants}
              className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Quick Location & Info Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-200/40 dark:border-slate-805/30 animate-fade-in">
                <MapPin className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-200/40 dark:border-slate-805/30 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-200/40 dark:border-slate-805/30 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                id="phone-btn"
              >
                <Phone className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                {personalInfo.phone}
              </a>
            </motion.div>

            {/* CTA Option Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start"
            >
              <button
                id="hero-view-projects"
                onClick={() => handleScrollTo("projects")}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/20 dark:shadow-cyan-500/10 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 group"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-contact-trigger"
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-white hover:bg-slate-100/50 dark:bg-slate-900 dark:hover:bg-slate-850 dark:text-slate-200 text-slate-800 border border-slate-250 dark:border-slate-800 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Get In Touch
              </button>

              <a
                id="hero-view-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-transparent dark:text-slate-300 text-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-805 flex items-center justify-center gap-2 transition-all hover:bg-slate-100/50 dark:hover:bg-slate-900/40"
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Metric bento panel Column */}
          <motion.div
            id="hero-metrics-grid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              {/* Outer tech badge */}
              <div className="absolute -top-3.5 -right-3.5 bg-amber-500 text-white p-2.5 rounded-2xl shadow-lg border border-amber-600/10">
                <Award className="h-5 w-5" />
              </div>

              <div className="text-center pb-6 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-500 dark:text-cyan-400 font-semibold block mb-1">
                  Academic Status
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Apex University
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Jaipur, Session 2023 – Present
                </p>
              </div>

              {/* Bento indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {/* Metric 1 */}
                <div className="bg-slate-50/50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-200/20 dark:border-white/5 flex flex-col justify-between">
                  <div className="flex items-center space-x-2 text-slate-555 mb-2">
                    <Database className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">
                      Current GPA
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white block font-mono">
                      8.2
                    </span>
                    <span className="text-[10px] text-slate-450 dark:text-slate-500">
                      Out of 10.0
                    </span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-slate-50/50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-200/20 dark:border-white/5 flex flex-col justify-between">
                  <div className="flex items-center space-x-2 text-slate-555 mb-2">
                    <Cpu className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">
                      Model Boost
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-500 dark:text-cyan-400 block font-mono">
                      +15%
                    </span>
                    <span className="text-[10px] text-slate-450 dark:text-slate-500">
                      Accuracy Lift
                    </span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="col-span-2 bg-slate-50/50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-200/20 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Core Languages
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-250">
                      Python & SQL
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md">
                      ML Workflows
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md">
                      SQL
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative mini graph placeholder element for smart dashboard look */}
              <div className="mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 bottom-0 w-1/3 bg-white/40 skew-x-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
