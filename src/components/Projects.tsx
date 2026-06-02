import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Github,
  ExternalLink,
  X,
  Plus,
  Filter,
  Cpu,
  BarChart3,
  Database,
} from "lucide-react";
import { projects, personalInfo } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [filter, setFilter] = useState<"ALL" | "AI_ML" | "Others">("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "ALL", label: "All Projects" },
    { id: "AI_ML", label: "AI & Machine Learning" },
    { id: "Others", label: "Other Utilities" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "ALL") return true;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#020617] border-b border-slate-200/50 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 dark:bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-200/30 mb-3">
            <Code2 className="h-3.5 w-3.5 text-cyan-500" />
            <span className="text-xs font-mono font-semibold text-cyan-705 dark:text-cyan-400 uppercase tracking-widest">
              Works & Code
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Machine Learning & Programming Projects
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            A selection of my primary algorithmic classifier packages, data
            visualization programs, and desktop applications.
          </p>
        </div>

        {/* Categories togglers */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-white/5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`project-tab-${tab.id.toLowerCase()}`}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.id === "ALL" && <Filter className="h-3.5 w-3.5" />}
                {tab.id === "AI_ML" && <Cpu className="h-3.5 w-3.5" />}
                {tab.id === "Others" && <Database className="h-3.5 w-3.5" />}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid Layout */}
        <motion.div
          layout
          id="projects-display-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Custom colors based on project categories to keep UI visually engaging and rhythmic
              const isML = project.category === "AI_ML";
              const accentColorClass = isML
                ? "text-cyan-500 bg-cyan-500/5"
                : "text-blue-500 bg-blue-500/5";
              const accentBorderClass = isML
                ? "hover:border-cyan-500/30"
                : "hover:border-blue-500/30";

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group bg-white/85 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-md ${accentBorderClass} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Decorative Banner head */}
                  <div className="h-2 bg-gradient-to-r from-slate-200 to-slate-350 dark:from-slate-800 dark:to-slate-700 group-hover:from-cyan-500 group-hover:to-blue-600 transition-colors duration-500" />

                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Badge line */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 dark:text-slate-300 text-slate-600">
                          {project.category === "AI_ML"
                            ? "AI / ML Research"
                            : "Desktop Utility"}
                        </span>

                        {project.metrics && (
                          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-450 bg-cyan-500/5 dark:bg-cyan-400/5 border border-cyan-550/10 px-2.5 py-1 rounded-md">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Brief description */}
                      <p className="mt-3 text-sm text-slate-505 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-200/30 dark:border-slate-800/30">
                      {/* Tech Stacks list */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-200/50 dark:bg-slate-900 border border-slate-200/10 dark:border-white/5 text-slate-600 dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md text-slate-400">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Actions row */}
                      <div className="flex items-center justify-between">
                        <button
                          id={`project-details-btn-${project.id}`}
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-bold tracking-wide text-slate-850 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          View Framework Details
                        </button>

                        <a
                          id={`project-source-btn-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all flex items-center justify-center"
                          title="Git Source Repository"
                        >
                          <Github className="h-4.5 w-4.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Detailed modal overlay using AnimatePresence */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 mr-0">
              {/* Blur backdrop overlay */}
              <motion.div
                id="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                id="modal-card"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg rounded-3xl border border-slate-200/40 dark:border-white/10 shadow-2xl relative w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
              >
                {/* Header segment with close buttons */}
                <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      {selectedProject.category === "AI_ML"
                        ? "AI / ML Model Pipeline"
                        : "Application Prototype"}
                    </span>
                    {selectedProject.metrics && (
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/85 px-2.5 py-0.5 rounded border border-slate-200/20 dark:border-white/5">
                        {selectedProject.metrics}
                      </span>
                    )}
                  </div>
                  <button
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-505 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content body with custom-scrollbar styling */}
                <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 flex-grow">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {selectedProject.longDescription ||
                        selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights statistics card */}
                  <div className="bg-slate-55/50 dark:bg-slate-950/40 p-4.5 rounded-2xl border border-slate-200/40 dark:border-white/5 flex items-center space-x-3.5">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-2 rounded-xl">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-505 block">
                        Performance Index
                      </span>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-250">
                        Evaluated and validated with{" "}
                        {selectedProject.metrics ||
                          "High Performance Standards"}
                      </p>
                    </div>
                  </div>

                  {/* Technology stacks overview */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-450 dark:text-slate-550 block mb-3">
                      Complete Technology Stacks Included
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-white/5 text-slate-707 dark:text-slate-300 text-xs font-mono py-1 px-3 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons row */}
                <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between shrink-0">
                  <span className="text-xs text-slate-400 dark:text-slate-505 font-mono">
                    All rights reserved &copy; {personalInfo.name}
                  </span>

                  <div className="flex items-center gap-3">
                    <a
                      id="modal-source-link"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#020617] hover:bg-black text-white flex items-center gap-1.5 justify-center transition-colors shadow-md border border-white/5"
                    >
                      <Github className="h-4 w-4" />
                      View Code Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
