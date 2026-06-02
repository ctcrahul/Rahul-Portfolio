import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Code,
  Layers,
  Sparkles,
  BookOpen,
  ChevronRight,
  Check,
} from "lucide-react";
import { education, skills } from "../data";

export default function About() {
  const [skillFilter, setSkillFilter] = useState<
    "all" | "programming" | "ml" | "data" | "other"
  >("all");

  const categories = [
    { id: "all", label: "All Skillsets" },
    { id: "programming", label: "Languages & Tools" },
    { id: "ml", label: "Machine Learning" },
    { id: "data", label: "Data Handling / Viz" },
    { id: "other", label: "Others" },
  ];

  const filteredSkills = skills.filter(
    (skill) => skillFilter === "all" || skill.category === skillFilter,
  );

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#020617] border-b border-slate-200/55 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 dark:bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-200/30 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
            <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">
              Profile Details
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Journey & Skill Index
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            A comprehensive overview of my academic credentials in Artificial
            Intelligence & Machine Learning along with specialized software
            development sets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Education Timeline & History */}
          <div
            id="education-academic-timeline"
            className="lg:col-span-6 space-y-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-2.5 rounded-xl border border-cyan-500/10">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Education Milestones
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  id={`edu-item-${idx}`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Decorative bullet node */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-[#020617] group-hover:bg-cyan-500 transition-colors duration-300 shadow-sm" />

                  <div className="bg-slate-50/50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200/40 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                      <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                        {edu.timeline}
                      </span>
                      <span className="inline-flex self-start sm:self-auto px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200/20">
                        {edu.gradeLabel}: {edu.grade}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {edu.institution}
                    </p>

                    {edu.details && (
                      <p className="mt-2.5 text-xs text-slate-650 dark:text-slate-400 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Technical Skill Deck */}
          <div id="skills-deck" className="lg:col-span-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-2.5 rounded-xl border border-cyan-500/10">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Technical Skill Deck
                </h3>
              </div>
            </div>

            {/* Sub-selector Filter categories tag slider */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`skill-filter-${cat.id}`}
                  onClick={() => setSkillFilter(cat.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    skillFilter === cat.id
                      ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Proficiencies Bars list layout */}
            <div
              id="skills-bars-grid"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/5 rounded-2xl flex flex-col justify-between hover:border-cyan-500/20 hover:bg-slate-150/20 dark:hover:bg-slate-900/30 transition-all shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono leading-none bg-slate-200/50 dark:bg-slate-800 px-1.5 py-1 rounded text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Filling line */}
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Quick Resume Bullet checklist */}
            <div className="bg-cyan-500/5 dark:bg-cyan-400/5 border border-cyan-500/10 rounded-2xl p-4 mt-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-500 dark:text-cyan-400 font-bold block mb-2">
                Domain Focus Areas
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                  Model Preprocessing pipelines
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                  Supervised Classification Tasks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                  Visual Analysis Plotting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cyan-505 dark:text-cyan-400 shrink-0" />
                  Data Manipulation & Feature Engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
