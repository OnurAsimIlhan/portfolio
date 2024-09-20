export const edges = [
  // Connections to Center Node
  { id: "center-machine-learning", source: "center", target: "machine-learning" },
  { id: "center-data-pipeline", source: "center", target: "data-pipeline" },
  { id: "center-backend", source: "center", target: "backend" },
  { id: "center-frontend", source: "center", target: "frontend" },
  { id: "center-database", source: "center", target: "database" },
  { id: "center-soft-skills", source: "center", target: "soft-skills" },



  // Machine Learning Edges
  { id: "ml-python-ml", source: "machine-learning", target: "python-ml" },
  { id: "ml-tensorflow", source: "machine-learning", target: "tensorflow" },
  { id: "ml-pytorch", source: "machine-learning", target: "pytorch" },
  { id: "ml-keras", source: "machine-learning", target: "keras" },
  { id: "ml-huggingface", source: "machine-learning", target: "huggingface" },
  { id: "ml-xgboost", source: "machine-learning", target: "xgboost" },
  { id: "ml-lightgbm", source: "machine-learning", target: "lightgbm" },
  { id: "ml-opencv", source: "machine-learning", target: "opencv" },
  { id: "ml-anomaly-detection", source: "machine-learning", target: "anomaly-detection" },
  { id: "ml-computer-vision", source: "machine-learning", target: "computer-vision" },
  { id: "ml-llm", source: "machine-learning", target: "llm" },
  { id: "ml-pandas", source: "machine-learning", target: "pandas" },
  { id: "ml-scikit-learn", source: "machine-learning", target: "scikit-learn" },
  { id: "ml-cnns", source: "machine-learning", target: "cnns" },
  { id: "ml-rnns", source: "machine-learning", target: "rnns" },
  { id: "ml-transfer-learning", source: "machine-learning", target: "transfer-learning" },
  { id: "ml-reinforcement-learning", source: "machine-learning", target: "reinforcement-learning" },
  { id: "ml-kaggle", source: "machine-learning", target: "kaggle" },
  { id: "ml-jupyter", source: "machine-learning", target: "jupyter" },
  { id: "ml-google-colab", source: "machine-learning", target: "google-colab" },
  // Data Pipeline Edges
  { id: "dp-airflow", source: "data-pipeline", target: "airflow" },
  { id: "dp-kafka", source: "data-pipeline", target: "kafka" },
  { id: "dp-pyspark", source: "data-pipeline", target: "pyspark" },
  { id: "dp-spark", source: "data-pipeline", target: "spark" },
  { id: "dp-logstash", source: "data-pipeline", target: "logstash" },
  { id: "dp-elk-stack", source: "data-pipeline", target: "elk-stack" },
  { id: "dp-mlflow", source: "data-pipeline", target: "mlflow" },
  { id: "dp-github-actions", source: "data-pipeline", target: "github-actions" },
  { id: "dp-docker", source: "data-pipeline", target: "docker" },
  { id: "dp-kubernetes", source: "data-pipeline", target: "kubernetes" },
  { id: "dp-devops", source: "data-pipeline", target: "devops" },
  { id: "dp-ci-cd", source: "data-pipeline", target: "ci-cd" },
  { id: "dp-git", source: "data-pipeline", target: "git" },

  // Backend Edges
  { id: "backend-django", source: "backend", target: "django" },
  { id: "backend-fastapi", source: "backend", target: "fastapi" },
  { id: "backend-flask", source: "backend", target: "flask" },
  { id: "backend-graphql", source: "backend", target: "graphql" },
  { id: "backend-restapi", source: "backend", target: "restapi" },
  { id: "backend-nodejs", source: "backend", target: "nodejs" },
  { id: "backend-php", source: "backend", target: "php" },
  { id: "backend-python", source: "backend", target: "python-backend" },
  { id: "backend-postman", source: "backend", target: "postman" },

  // Frontend Edges
  { id: "frontend-javascript", source: "frontend", target: "javascript" },
  { id: "frontend-typescript", source: "frontend", target: "typescript" },
  { id: "frontend-react", source: "frontend", target: "react" },
  { id: "frontend-tailwindcss", source: "frontend", target: "tailwindcss" },
  { id: "frontend-bootstrap", source: "frontend", target: "bootstrap" },
  { id: "frontend-figma", source: "frontend", target: "figma" },

  // Database Edges
  { id: "db-mysql", source: "database", target: "mysql" },
  { id: "db-mssql", source: "database", target: "mssql" },
  { id: "db-mongodb", source: "database", target: "mongodb" },
  { id: "db-elastic", source: "database", target: "elastic" },
  { id: "db-firebase", source: "database", target: "firebase" },

  // Soft Skills Edges
  { id: "ss-leadership", source: "soft-skills", target: "leadership" },
  { id: "ss-collaboration", source: "soft-skills", target: "collaboration" },
  { id: "ss-problem-solving", source: "soft-skills", target: "problem-solving" },
  { id: "ss-jira", source: "soft-skills", target: "jira" },
  { id: "ss-doors", source: "soft-skills", target: "doors" },
  { id: "ss-slack", source: "soft-skills", target: "slack" },
];
export const aboutMeCertificationsEdges = [
  // About Me Edges
  { id: "about-me-education", source: "about-me", target: "education" },
  { id: "about-me-hobies", source: "about-me", target: "hobies" },
  {
    id: "about-me-certifications",
    source: "about-me",
    target: "certifications",
  },

  // Education-related edges
  {
    id: "education-bilkent-university",
    source: "education",
    target: "bilkent-university",
  },
  {
    id: "education-izmir-science-highschool",
    source: "education",
    target: "izmir-science-highschool",
  },

  // Hobbies-related edges
  { id: "hobies-gaming", source: "hobies", target: "gaming" },
  { id: "hobies-serieses", source: "hobies", target: "serieses" },
  { id: "hobies-pc-building", source: "hobies", target: "pc-building" },

  // Birthplace-related edge

  // Certifications-related edges
  {
    id: "certifications-deep-learning-header",
    source: "certifications",
    target: "deep-learning-header",
  },
  {
    id: "certifications-google-header",
    source: "certifications",
    target: "google-header",
  },
  {
    id: "certifications-meta-header",
    source: "certifications",
    target: "meta-header",
  },
  {
    id: "certifications-duke-header",
    source: "certifications",
    target: "duke-header",
  },
  {
    id: "certifications-ibm-header",
    source: "certifications",
    target: "ibm-header",
  },
  {
    id: "certifications-kaggle-header",
    source: "certifications",
    target: "kaggle-header",
  },

  {
    id: "deep-learning-header-deep-learning",
    source: "deep-learning-header",
    target: "deep-learning",
  },
  {
    id: "deep-learning-header-ml-specialization",
    source: "deep-learning-header",
    target: "ml-specialization",
  },
  {
    id: "deep-learning-header-tensorflow-cert",
    source: "deep-learning-header",
    target: "tensorflow-cert",
  },

  {
    id: "google-header-cybersecurity",
    source: "google-header",
    target: "cybersecurity",
  },
  {
    id: "google-header-data-analysis",
    source: "google-header",
    target: "data-analysis",
  },
  {
    id: "google-header-project-management",
    source: "google-header",
    target: "project-management",
  },

  {
    id: "meta-header-frontend-meta",
    source: "meta-header",
    target: "frontend-meta",
  },
  {
    id: "meta-header-backend-meta",
    source: "meta-header",
    target: "backend-meta",
  },

  {
    id: "duke-header-git-docker-cert",
    source: "duke-header",
    target: "git-docker-cert",
  },

  { id: "ibm-header-eda-cert", source: "ibm-header", target: "eda-cert" },

  {
    id: "kaggle-header-kaggle-cert",
    source: "kaggle-header",
    target: "kaggle-cert",
  },
];
