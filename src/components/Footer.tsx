import { ArrowUp, Heart, Github, Linkedin, Terminal } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="portfolio-footer"
      className="bg-slate-50/40 dark:bg-[#020617] border-t border-slate-200/50 dark:border-white/5 py-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2 text-center md:text-left">
            <div className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-2 rounded-lg flex items-center justify-center border border-cyan-500/15">
              <Terminal className="h-4.5 w-4.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-extrabold text-slate-900 dark:text-white uppercase leading-none mb-0.5">
                {personalInfo.name}
              </span>
              <p className="text-[10px] text-slate-500 font-mono">
                &copy; {new Date().getFullYear()} Jaipur, Rajasthan. All rights
                reserved.
              </p>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-4">
            <a
              id="footer-github"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              id="footer-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Back to top anchor buttons */}
          <div>
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-slate-350 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
              title="Return to the top of page"
            >
              Back to Top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Made with segment */}
        <div className="mt-8 pt-8 border-t border-slate-200/40 dark:border-white/5 text-center">
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-550 flex items-center justify-center gap-1">
            Built By
            <Heart className="h-3 w-3 text-cyan-500 fill-cyan-500" />
            Rahul Singh
          </p>
        </div>
      </div>
    </footer>
  );
}
