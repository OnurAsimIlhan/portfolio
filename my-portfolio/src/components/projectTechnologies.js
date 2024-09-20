export const projectTechnologies = {
  ford_otosan: [
    // Nodes
    "center",
    "center-machine-learning",
    "center-data-pipeline",
    "machine-learning",
    "airflow",
    "kafka",
    "pyspark",
    "elk-stack",
    "mlflow",
    "containerization",
    "docker",
    "kubernetes",
    "devops",
    "ci-cd",
    "tensorflow",
    "anomaly-detection",
    "about-me",
    "data-pipeline",

    // Edges
    "center-about-me",
    "center-machine-learning",
    "center-data-pipeline",
    "dp-airflow",
    "dp-kafka",
    "dp-pyspark",
    "dp-elk-stack",
    "dp-mlflow",
    "dp-containerization",
    "dp-docker",
    "dp-kubernetes",
    "dp-devops",
    "dp-ci-cd",
    "ml-tensorflow",
    "ml-anomaly-detection",
  ],

  tai_internship: [
    // Nodes
    "center",
    "center-machine-learning",
    "machine-learning",
    "python-ml",
    "tensorflow",
    "pytorch",

    // Edges
    "center-machine-learning",
    "ml-python-ml",
    "ml-tensorflow",
    "ml-pytorch",
  ],

  vigilant_project: [
    // Nodes
    "center",
    "center-machine-learning",
    "machine-learning",
    "opencv",
    "cnns",
    "computer-vision",

    // Edges
    "center-machine-learning",
    "ml-opencv",
    "ml-cnns",
    "ml-computer-vision",
  ],

  pneumonia_detection: [
    // Nodes
    "center",
    "center-machine-learning",
    "machine-learning",
    "cnns",
    "transfer-learning",
    "tensorflow",

    // Edges
    "center-machine-learning",
    "ml-cnns",
    "ml-transfer-learning",
    "ml-tensorflow",
  ],

  airpreneurs: [
    // Nodes
    "center",
    "center-machine-learning",
    "machine-learning",
    "reinforcement-learning",
    "clustering",

    // Edges
    "center-machine-learning",
    "ml-reinforcement-learning",
    "ml-clustering",
  ],

  blockchain_project: [
    // Nodes
    "center",
    "center-backend",
    "backend",
    "solidity",
    "python-ml",

    // Edges
    "center-backend",
    "backend-solidity",
    "backend-python-ml",
  ],

  scraper_trading_project: [
    // Nodes
    "center",
    "center-backend",
    "backend",
    "restapi",
    "nodejs",
    "machine-learning",
    "python-ml",

    // Edges
    "center-backend",
    "backend-restapi",
    "backend-nodejs",
    "center-machine-learning",
    "ml-python-ml",
  ],

  ar_app_project: [
    // Nodes
    "center",
    "center-frontend",
    "frontend",
    "react",
    "typescript",
    "javascript",

    // Edges
    "center-frontend",
    "frontend-react",
    "frontend-typescript",
    "frontend-javascript",
  ],

  opengl_project: [
    // Nodes
    "center",
    "center-frontend",
    "frontend",
    "javascript",
    "css",

    // Edges
    "center-frontend",
    "frontend-javascript",
    "frontend-css",
  ],

  erasmus_tracking_system: [
    // Nodes
    "center",
    "center-backend",
    "backend",
    "nodejs",
    "restapi",
    "database",
    "mysql",
    "sql",

    // Edges
    "center-backend",
    "backend-nodejs",
    "backend-restapi",
    "center-database",
    "db-mysql",
    "db-sql",
  ],

  about_me: [
    // Nodes
    "about-me",
    "education",
    "hobies",

    // Education-related nodes
    "bilkent-university",
    "izmir-science-highschool",

    "gaming",
    "serieses",
    "pc-building",

    "about-me-education",
    "about-me-hobies",
    "education-izmir-science-highschool",
    "education-bilkent-university",
    "hobies-gaming",
    "hobies-serieses",
    "hobies-pc-building",
  ],

  about_me_paragraph: ["about-me"],

  education: [
    "about-me",
    "education",
    "bilkent-university",
    "izmir-science-highschool",
    "about-me-education",
    "education-izmir-science-highschool",
    "education-bilkent-university",
  ],

  hobies: [
    "about-me",
    "about-me-hobies",
    "hobies",
    "gaming",
    "serieses",
    "pc-building",
    "hobies-gaming",
    "hobies-serieses",
    "hobies-pc-building",
  ],

  certifications_header: [
    "certifications",
    "certifications-header",
    "certifications-deep-learning-header",
    "certifications-google-header",
    "certifications-meta-header",
    "certifications-duke-header",
    "certifications-ibm-header",
    "certifications-kaggle-header",
    "deep-learning",
    "ml-specialization",
    "tensorflow-cert",
    "cybersecurity",
    "data-analysis",
    "project-management",
    "frontend-meta",
    "backend-meta",
    "git-docker-cert",
    "eda-cert",
    "kaggle-cert",
    "deep-learning-header",
    "google-header",
    "meta-header",
    "duke-header",
    "ibm-header",
    "kaggle-header",
    "deep-learning-header-deep-learning",
    "deep-learning-header-ml-specialization",
    "deep-learning-header-tensorflow-cert",
    "google-header-cybersecurity",
    "google-header-data-analysis",
    "google-header-project-management",
    "meta-header-frontend-meta",
    "meta-header-backend-meta",
    "duke-header-git-docker-cert",
    "ibm-header-eda-cert",
    "kaggle-header-kaggle-cert"
  ],

  deep_learning: [
  "certifications",
  "certifications-header",
  "certifications-deep-learning-header",
  "deep-learning-header",
  "deep-learning-header-deep-learning",
  "deep-learning-header-ml-specialization",
  "deep-learning-header-tensorflow-cert",
  "deep-learning",
  "ml-specialization",
  "tensorflow-cert"
],
google_certificates: [
  "certifications",
  "certifications-header",
  "certifications-google-header",
  "google-header",
  "google-header-cybersecurity",
  "google-header-data-analysis",
  "google-header-project-management",
  "cybersecurity",
  "data-analysis",
  "project-management"
],

backend_frontend_meta: [
  "certifications",
  "certifications-header",
  "certifications-meta-header",
  "meta-header",
  "meta-header-frontend-meta",
  "meta-header-backend-meta",
  "frontend-meta",
  "backend-meta"
],

git_docker_devops: [
  "certifications",
  "certifications-header",
  "certifications-duke-header",
  "duke-header",
  "duke-header-git-docker-cert",
  "git-docker-cert"
],
eda_ibm: [
  "certifications",
  "certifications-header",
  "certifications-ibm-header",
  "ibm-header",
  "ibm-header-eda-cert",
  "eda-cert"
],
kaggle_certificates: [
  "certifications",
  "certifications-header",
  "certifications-kaggle-header",
  "kaggle-header",
  "kaggle-header-kaggle-cert",
  "kaggle-cert"
],



};
