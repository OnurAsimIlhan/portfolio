export const edges = [
  // Connections to Center Node
  { id: "center-about-me", source: "center", target: "about-me" },
  { id: "center-machine-learning", source: "center", target: "machine-learning" },
  { id: "center-data-pipeline", source: "center", target: "data-pipeline" },
  { id: "center-backend", source: "center", target: "backend" },
  { id: "center-frontend", source: "center", target: "frontend" },
  { id: "center-database", source: "center", target: "database" },
  { id: "center-soft-skills", source: "center", target: "soft-skills" },
    // About Me Edges
  { id: "about-me-education", source: "about-me", target: "education" },
  { id: "about-me-hobies", source: "about-me", target: "hobies" },
  { id: "about-me-birthplace", source: "about-me", target: "birthplace" },

  // Education-related edges
  { id: "education-bilkent-university", source: "education", target: "bilkent-university" },
  { id: "education-computer-science-degree", source: "education", target: "computer-science-degree" },
  { id: "education-scholarship", source: "education", target: "scholarship" },



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

  // Data Pipeline Edges
  { id: "dp-airflow", source: "data-pipeline", target: "airflow" },
  { id: "dp-kafka", source: "data-pipeline", target: "kafka" },
  { id: "dp-pyspark", source: "data-pipeline", target: "pyspark" },
  { id: "dp-spark", source: "data-pipeline", target: "spark" },
  { id: "dp-logstash", source: "data-pipeline", target: "logstash" },
  { id: "dp-elk-stack", source: "data-pipeline", target: "elk-stack" },
  { id: "dp-mlflow", source: "data-pipeline", target: "mlflow" },
  { id: "dp-airbyte", source: "data-pipeline", target: "airbyte" },
  { id: "dp-containerization", source: "data-pipeline", target: "containerization" },
  { id: "dp-model-deployment", source: "data-pipeline", target: "model-deployment" },
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

  // Frontend Edges
  { id: "frontend-javascript", source: "frontend", target: "javascript" },
  { id: "frontend-typescript", source: "frontend", target: "typescript" },
  { id: "frontend-react", source: "frontend", target: "react" },
  { id: "frontend-css", source: "frontend", target: "css" },
  { id: "frontend-tailwindcss", source: "frontend", target: "tailwindcss" },
  { id: "frontend-bootstrap", source: "frontend", target: "bootstrap" },

  // Database Edges
  { id: "db-sql", source: "database", target: "sql" },
  { id: "db-mysql", source: "database", target: "mysql" },
  { id: "db-mssql", source: "database", target: "mssql" },
  { id: "db-nosql", source: "database", target: "nosql" },
  { id: "db-mongodb", source: "database", target: "mongodb" },
  { id: "db-elastic", source: "database", target: "elastic" },

  // Soft Skills Edges
  { id: "ss-leadership", source: "soft-skills", target: "leadership" },
  { id: "ss-collaboration", source: "soft-skills", target: "collaboration" },
  { id: "ss-problem-solving", source: "soft-skills", target: "problem-solving" },
];
export const aboutMeCertificationsEdges = [
  // About Me Edges
  { id: "about-me-education", source: "about-me", target: "education" },
  { id: "about-me-hobies", source: "about-me", target: "hobies" },
  { id: "about-me-certifications", source: "about-me", target: "certifications" },
  
  // Education-related edges
  { id: "education-bilkent-university", source: "education", target: "bilkent-university" },
  { id: "education-izmir-science-highschool", source: "education", target: "izmir-science-highschool" },

  // Hobbies-related edges
  { id: "hobies-coding", source: "hobies", target: "coding" },
  { id: "hobies-reading", source: "hobies", target: "reading" },
  { id: "hobies-sports", source: "hobies", target: "sports" },
  { id: "hobies-traveling", source: "hobies", target: "traveling" },
  
  // Birthplace-related edge
  
  // Certifications-related edges
  { id: "certifications-deep-learning", source: "certifications", target: "deep-learning" },
  { id: "certifications-eda-cert", source: "certifications", target: "eda-cert" },
  { id: "certifications-tensorflow-cert", source: "certifications", target: "tensorflow-cert" },
  { id: "certifications-git-docker-cert", source: "certifications", target: "git-docker-cert" },
];