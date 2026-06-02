import {
  Project,
  ExperienceItem,
  EducationItem,
  Skill,
  CertificationItem,
} from "./types";

export const personalInfo = {
  name: "Rahul Singh",
  title: "AI & Machine Learning Developer",
  location: "Jaipur, Rajasthan, India",
  email: "rahul.r.singh2027@gmail.com",
  phone: "+91 85610 98467",
  linkedin: "https://linkedin.com/in/rahulsingh51775177",
  github: "https://github.com/ctcrahul",
  summary:
    "Passionate B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on experience in Python development, data manipulation, and model building. Skilled in leveraging tools like Google Colab, Scikit-learn, Pandas, and Matplotlib to build and optimize AI/ML solutions. Eager to contribute to AI-driven decision-making, automation, and data visualization.",
  stats: [
    { label: "B.Tech Specialization", value: "AI & ML" },
    { label: "Current B.Tech CGPA", value: "8.2/10" },
    { label: "Model Accuracy Lift", value: "15%" },
    { label: "Key Language", value: "Python" },
  ],
};
export const skills: Skill[] = [
  // Programming
  { name: "Python", level: 90, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },
  { name: "HTML", level: 85, category: "programming" },
  { name: "CSS", level: 80, category: "programming" },
  { name: "JavaScript", level: 75, category: "programming" },
  { name: "Git & GitHub", level: 85, category: "programming" },

  // AI / ML
  { name: "Machine Learning", level: 88, category: "ml" },
  { name: "Scikit-learn", level: 85, category: "ml" },
  { name: "Deep Learning", level: 80, category: "ml" },
  { name: "TensorFlow", level: 75, category: "ml" },
  { name: "NLP", level: 80, category: "ml" },
  { name: "Generative AI", level: 80, category: "ml" },

  // Data Science
  { name: "Pandas", level: 90, category: "data" },
  { name: "NumPy", level: 88, category: "data" },
  { name: "Matplotlib", level: 85, category: "data" },
  { name: "Data Preprocessing", level: 88, category: "data" },

  // Deployment & Tools
  { name: "Streamlit", level: 80, category: "other" },
  { name: "Flask", level: 75, category: "other" },
  { name: "Data Structures & Algorithms", level: 80, category: "other" },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Machine Learning Intern",
    company: "Yhills Edutech Pvt. Ltd.",
    location: "Remote",
    duration: "2 Months Intern",
    achievements: [
      "Built and refined machine learning models for high-dimensional image dataset classification, boosting overall model accuracy of final training iteration by 15%",
      "Utilized Python, Scikit-learn, and Google Colab environments for rapid training, evaluation, and pipeline testing across multiple model architectures",
      "Implemented robust data preprocessing pipelines including normalization, image rescaling, data manipulation, and high-fidelity visualizations to isolate anomalies and refine performance metrics",
      "Collaborated actively with technical mentors in brainstorming sessions to design optimized model workflows, validate features, and document key findings",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Google Colab",
      "Pandas",
      "Matplotlib",
      "Image Processing",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "edu1",
    institution: "Apex University, Jaipur",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    timeline: "2023 – Present",
    grade: "8.2 CGPA",
    gradeLabel: "Current CGPA",
    details:
      "Specialized coursework in Deep Learning, Supervised and Unsupervised Learning Models, Advanced Data Structures, Statistics, and Data Management Systems.",
  },
  {
    id: "edu2",
    institution: "Universe Public Sr. Sec. School, Jaipur",
    degree: "Class 12th Secondary Education (RBSE Board)",
    timeline: "2021 – 2023",
    grade: "77%",
    gradeLabel: "Aggregate Percentage",
    details: "Focused on Physics, Chemistry, and Mathematics (PCM).",
  },
  {
    id: "edu3",
    institution: "Universe Public Sr. Sec. School, Jaipur",
    degree: "Class 10th Secondary Education (RBSE Board)",
    timeline: "2019 – 2021",
    grade: "93%",
    gradeLabel: "Aggregate Percentage",
    details:
      "Received academic commendation for outstanding overall board performance, highlighting analytical and mathematical foundation.",
  },
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Image Classification Pipeline",
    description:
      "Advanced machine learning pipeline built during internship at Yhills Edutech. Engineered to load, preprocess, train, and validate models on multi-class image datasets.",
    longDescription:
      "Developed during a research-focused internship, this project introduces automatic dataset augmentation and convolutional normalization before feeding data into supervised classifiers. Fine-tuned hyperparameters to lift diagnostic accuracy by 15%. Evaluated models with ROC curves, confusion matrices, and precision/recall trade-offs.",
    category: "AI_ML",
    technologies: [
      "Python",
      "Scikit-earn",
      "Google Colab",
      "Matplotlib",
      "NumPy",
      "Seaborn",
    ],
    metrics: "+15% Accuracy Lift",
    githubUrl: "https://github.com/rahulsingh51775177/image-classification",
  },
  {
    id: "proj2",
    title: "Credit Card Fraud Detection",
    description:
      "Imbalanced dataset anomaly detection model. Utilized sampling techniques and ensemble classifiers to identify fraudulent bank transactions securely and instantly.",
    longDescription:
      "High-stake classifier tackling heavy class imbalance (less than 0.2% fraud cases). Deployed Synthetic Minority Over-sampling Technique (SMOTE) to rebalance datasets. Implemented Random Forest and Gradient Boosted architectures to optimize false positive rates, achieving high recall and precision scores to safeguard financial transaction streams.",
    category: "AI_ML",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn",
      "SMOTE Engine",
    ],
    metrics: "99.4% ROC-AUC Score",
    githubUrl: "https://github.com/ctcrahul/Credit_Fraudd_Detection_System",
  },
  {
    id: "proj3",
    title: "Social Media Sentiment Analyzer",
    description:
      "Twitter sentiment analysis application utilizing Natural Language Processing (NLP) models to group tweets into positive, negative, and neutral sentiments over real-time events.",
    longDescription:
      "A custom text classification project that processes, corpus-cleanses, and tokenizes social media streams. Employs intensive regex text normalization, stopwords pruning, Lemmatization, and TF-IDF vectors. Evaluated using Naive Bayes, Support Vector Machines, and Logistic Regressions, delivering powerful real-time sentiment distribution charts.",
    category: "AI_ML",
    technologies: [
      "Python",
      "NLP Pipelines",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Text Normalization",
    ],
    metrics: "88.5% F1-Micro Score",
    githubUrl: "https://github.com/ctcrahul/Twitter-Sentiment-Analysis",
  },
  {
    id: "proj4",
    title: "Student Marks Management System",
    description:
      "A responsive desktop application featuring a clean GUI built with Tkinter for storing, modifying, and searching student records and academic marks effortlessly.",
    longDescription:
      "A robust, file/JSON-persisted management application designed to automate record-keeping for classroom environments. It implements full CRUD operations, features clean interface dialogues, supports student record query filtering, and auto-calculates statistical distributions (such as class averages and ranking boards).",
    category: "Others",
    technologies: [
      "Python",
      "Tkinter GUI",
      "File I/O Parsing",
      "Matplotlib Extension",
    ],
    metrics: "Active Utility Tool",
    githubUrl: "https://github.com/rahulsingh51775177/marks-management",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "cert1",
    title: "Python Programming Specialization",
    issuer: "Yhills Edutech Pvt. Ltd.",
    platforms: "Yhills Edutech",
  },
  {
    id: "cert2",
    title: "Machine Learning Fundamentals Specialization",
    issuer: "Coursera, GeeksforGeeks, Udemy",
    platforms: "Coursera, GFG, Udemy",
  },
  {
    id: "cert3",
    title: "Responsive Web Development (HTML, CSS, JavaScript)",
    issuer: "Udemy & Coursera Programs",
    platforms: "Udemy, Coursera",
  },
  {
    id: "cert4",
    title: "IT Support Professional Certificate",
    issuer: "Google Career Certifications",
    platforms: "Google Partner Program",
  },
  {
    id: "cert5",
    title: "Python Mastery: 100 Days, 100 Projects",
    issuer: "Python Development Program",
    platforms: "Udemy",
  },
];
