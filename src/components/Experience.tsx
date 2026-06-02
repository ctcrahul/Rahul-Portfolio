import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  CheckSquare,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50/40 dark:bg-[#020617] border-b border-slate-200/50 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 dark:bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-200/30 mb-3">
            <Briefcase className="h-3.5 w-3.5 text-cyan-500" />
            <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">
              Work Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Internship Record
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            A look into my hands-on enterprise-level machine learning work and
            mentorship workflows.
          </p>
        </div>

        {/* Timeline Frame and Cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Header section with company badge */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent border-b border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-3 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-md border border-slate-200/20 dark:border-white/5">
                    <Calendar className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                    {exp.duration}
                  </span>
                  <span className="text-slate-400">
                    Jaipur, Rajasthan (Hybrid)
                  </span>
                </div>
              </div>

              {/* Achievements Detailed Description */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-505 block mb-4">
                    Key Performance Objectives & Actions
                  </h4>
                  <ul className="space-y-3.5">
                    {exp.achievements.map((achievement, bulletIdx) => (
                      <motion.li
                        key={bulletIdx}
                        id={`exp-bullet-${bulletIdx}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: bulletIdx * 0.1 }}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <CheckSquare className="h-4 w-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech chips used */}
                <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-505 block mb-3">
                    Technologies & Environments Mastered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        id={`exp-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                        className="bg-slate-100 dark:bg-slate-950 text-slate-705 dark:text-slate-350 text-xs font-mono py-1 px-3 rounded-lg border border-slate-200/40 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional high fidelity takeaway box */}
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 flex gap-3.5 items-start">
                  <div className="bg-amber-100 dark:bg-amber-950/40 p-1.5 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      Internship Takeaway
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      This role built my foundational pipeline engineering
                      knowledge, specifically in dealing with raw classification
                      limits and finding hyperparameter optimizations across
                      large dataset constraints.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
