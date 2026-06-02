import { motion } from "motion/react";
import { Award, ShieldCheck, ChevronRight, BookOpen } from "lucide-react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-50/40 dark:bg-[#020617] border-b border-slate-200/50 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 dark:bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-200/30 mb-3">
            <Award className="h-3.5 w-3.5 text-cyan-500" />
            <span className="text-xs font-mono font-semibold text-cyan-705 dark:text-cyan-400 uppercase tracking-widest">
              Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Validated seals of technical expertise from educational programs and
            online learning platforms.
          </p>
        </div>

        {/* Certifications Grid layout */}
        <div
          id="certs-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={`cert-item-${cert.id}`}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 shadow-sm hover:shadow-md hover:border-cyan-500/25 transition-all duration-300 flex items-start gap-4"
            >
              <div className="bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-3 rounded-xl border border-cyan-500/15 shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div className="space-y-1.5 flex-grow">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-505 dark:text-slate-400 font-medium">
                  Issued by {cert.issuer}
                </p>
                <div className="flex items-center space-x-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-105 dark:bg-slate-800 border border-slate-200/20 dark:border-white/5 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded leading-none">
                    Verified Program
                  </span>
                  {cert.platforms && (
                    <span className="text-[10px] text-slate-400 font-mono">
                      on {cert.platforms}
                    </span>
                  )}
                </div>
              </div>

              {/* Minimalist arrow link element */}
              <div className="text-slate-350 dark:text-slate-655 shrink-0 self-center">
                <ChevronRight className="h-5 w-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom micro quote card */}
        <div className="mt-12 text-center bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-5 max-w-xl mx-auto rounded-2xl shadow-sm">
          <BookOpen className="h-5 w-5 text-cyan-500 dark:text-cyan-400 mx-auto mb-2" />
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            "Continuous technical upskilling in algorithmic networks, supervised
            prediction systems, and browser architectures fuels my developer
            roadmap."
          </p>
        </div>
      </div>
    </section>
  );
}
