export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "AI_ML" | "Web_Design" | "Others";
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  timeline: string;
  grade: string;
  details?: string;
  gradeLabel?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100 percentage
  category: "programming" | "ml" | "data" | "other";
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platforms?: string;
  link?: string;
}
