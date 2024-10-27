export const edges = [
  // Connecting main nodes to categories
  { id: "center-ml-dl-edge", source: "center", target: "ml-dl-node" },
  { id: "center-backend-edge", source: "center", target: "backend-node" },
  { id: "center-frontend-edge", source: "center", target: "frontend-node" },
  { id: "center-databases-edge", source: "center", target: "databases-node" },
  { id: "center-dev-data-mlops-edge", source: "center", target: "dev-data-mlops-node" },
  { id: "center-cloud-edge", source: "center", target: "cloud-node" },

  { id: "center-softskills-edge", source: "center", target: "soft-skills-node" },
  // ML & DL Frameworks, Techniques, Libraries, Models
  { id: "ml-dl-tensorflow-edge", source: "ml-dl-node", target: "tensorflow" },
  { id: "ml-dl-pytorch-edge", source: "ml-dl-node", target: "pytorch" },
  { id: "ml-dl-scikit-learn-edge", source: "ml-dl-node", target: "scikit-learn" },
  { id: "ml-dl-keras-edge", source: "ml-dl-node", target: "keras" },
  { id: "ml-dl-huggingface-edge", source: "ml-dl-node", target: "huggingface" },
  { id: "ml-dl-cnns-edge", source: "ml-dl-node", target: "cnns" },
  { id: "ml-dl-rnns-edge", source: "ml-dl-node", target: "rnns" },
  { id: "ml-dl-transformers-edge", source: "ml-dl-node", target: "transformers" },
  { id: "ml-dl-bert-edge", source: "ml-dl-node", target: "bert" },
  { id: "ml-dl-transfer-learning-edge", source: "ml-dl-node", target: "transfer-learning" },
  { id: "ml-dl-fine-tuning-edge", source: "ml-dl-node", target: "fine-tuning" },
  { id: "ml-dl-quantization-edge", source: "ml-dl-node", target: "quantization" },
  { id: "ml-dl-lora-edge", source: "ml-dl-node", target: "lora" },
  { id: "ml-dl-anomaly-detection-edge", source: "ml-dl-node", target: "anomaly-detection" },
  { id: "ml-dl-computer-vision-edge", source: "ml-dl-node", target: "computer-vision" },
  { id: "ml-dl-reinforcement-learning-edge", source: "ml-dl-node", target: "reinforcement-learning" },
  { id: "ml-dl-xgboost-edge", source: "ml-dl-node", target: "xgboost" },
  { id: "ml-dl-lightgbm-edge", source: "ml-dl-node", target: "lightgbm" },
  { id: "ml-dl-opencv-edge", source: "ml-dl-node", target: "opencv" },
  { id: "ml-dl-pandas-edge", source: "ml-dl-node", target: "pandas" },
  { id: "ml-dl-gpt-edge", source: "ml-dl-node", target: "gpt" },
  { id: "ml-dl-llama-edge", source: "ml-dl-node", target: "llama" },
  { id: "ml-dl-mistral-edge", source: "ml-dl-node", target: "mistral" },
  { id: "ml-dl-kaggle-edge", source: "ml-dl-node", target: "kaggle" },
  { id: "ml-dl-jupyter-edge", source: "ml-dl-node", target: "jupyter" },
  { id: "ml-dl-google-colab-edge", source: "ml-dl-node", target: "google-colab" },

  // Backend Frameworks and Tools
  { id: "backend-django-edge", source: "backend-node", target: "django" },
  { id: "backend-flask-edge", source: "backend-node", target: "flask" },
  { id: "backend-fastapi-edge", source: "backend-node", target: "fastapi" },
  { id: "backend-streamlit-edge", source: "backend-node", target: "streamlit" },
  { id: "backend-restapi-edge", source: "backend-node", target: "restapi" },
  { id: "backend-graphql-edge", source: "backend-node", target: "graphql" },
  { id: "backend-postman-edge", source: "backend-node", target: "postman" },
  { id: "backend-jinja2-edge", source: "backend-node", target: "jinja2" },

  // Frontend Frameworks and Tools
  { id: "frontend-reactjs-edge", source: "frontend-node", target: "reactjs" },
  { id: "frontend-tailwind-edge", source: "frontend-node", target: "tailwind" },
  { id: "frontend-bootstrap-edge", source: "frontend-node", target: "bootstrap" },
  { id: "frontend-javascript-edge", source: "frontend-node", target: "javascript" },
  { id: "frontend-typescript-edge", source: "frontend-node", target: "typescript" },
  { id: "frontend-figma-edge", source: "frontend-node", target: "figma" },

  // Database Technologies
  { id: "databases-mysql-edge", source: "databases-node", target: "mysql" },
  { id: "databases-postgresql-edge", source: "databases-node", target: "postgresql" },
  { id: "databases-rds-edge", source: "databases-node", target: "rds" },
  { id: "databases-mongodb-edge", source: "databases-node", target: "mongodb" },
  { id: "databases-firebase-edge", source: "databases-node", target: "firebase" },
  { id: "databases-cassandra-edge", source: "databases-node", target: "cassandra" },
  { id: "databases-elk-stack-edge", source: "databases-node", target: "elk-stack" },

  // Dev/Data/ML(Ops) Tools
  { id: "dev-data-mlops-airflow-edge", source: "dev-data-mlops-node", target: "airflow" },
  { id: "dev-data-mlops-kafka-edge", source: "dev-data-mlops-node", target: "kafka" },
  { id: "dev-data-mlops-etl-edge", source: "dev-data-mlops-node", target: "etl" },
  { id: "dev-data-mlops-git-edge", source: "dev-data-mlops-node", target: "git" },
  { id: "dev-data-mlops-github-actions-edge", source: "dev-data-mlops-node", target: "github-actions" },
  { id: "dev-data-mlops-circleci-edge", source: "dev-data-mlops-node", target: "circleci" },
  { id: "dev-data-mlops-mlflow-edge", source: "dev-data-mlops-node", target: "mlflow" },
  { id: "dev-data-mlops-dvc-edge", source: "dev-data-mlops-node", target: "dvc" },
  { id: "dev-data-mlops-dagshub-edge", source: "dev-data-mlops-node", target: "dagshub" },
  { id: "dev-data-mlops-docker-edge", source: "dev-data-mlops-node", target: "docker" },
  { id: "dev-data-mlops-kubernetes-edge", source: "dev-data-mlops-node", target: "kubernetes" },
  { id: "dev-data-mlops-grafana-edge", source: "dev-data-mlops-node", target: "grafana" },
  { id: "dev-data-mlops-nvidia-nim-edge", source: "dev-data-mlops-node", target: "nvidia-nim" },
  { id: "dev-data-mlops-groq-edge", source: "dev-data-mlops-node", target: "groq" },
  { id: "dev-data-mlops-lpu-edge", source: "dev-data-mlops-node", target: "lpu" },

  // Cloud Platforms
  { id: "cloud-aws-edge", source: "cloud-node", target: "aws" },
  { id: "cloud-sagemaker-edge", source: "cloud-node", target: "sagemaker" },
  { id: "cloud-bedrock-edge", source: "cloud-node", target: "bedrock" },
  { id: "cloud-s3-edge", source: "cloud-node", target: "s3" },
  { id: "cloud-ec2-edge", source: "cloud-node", target: "ec2" },
  { id: "cloud-api-gateway-edge", source: "cloud-node", target: "api-gateway" },
  { id: "cloud-lambda-edge", source: "cloud-node", target: "lambda" },

  { id: "soft-skills-agile-edge", source: "soft-skills-node", target: "agile" },
  { id: "soft-skills-scrum-edge", source: "soft-skills-node", target: "scrum" },
  { id: "soft-skills-jira-edge", source: "soft-skills-node", target: "jira" },
  { id: "soft-skills-doors-edge", source: "soft-skills-node", target: "doors" },
  { id: "soft-skills-slack-edge", source: "soft-skills-node", target: "slack" },
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
  { id: "hobies-gaming", source: "hobies", target: "gaming" },
  { id: "hobies-serieses", source: "hobies", target: "serieses" },
  { id: "hobies-pc-building", source: "hobies", target: "pc-building" },

  // Certifications-related edges
  { id: "certifications-deep-learning-header", source: "certifications", target: "deep-learning-header" },
  { id: "certifications-google-header", source: "certifications", target: "google-header" },
  { id: "certifications-meta-header", source: "certifications", target: "meta-header" },
  { id: "certifications-duke-header", source: "certifications", target: "duke-header" },
  { id: "certifications-ibm-header", source: "certifications", target: "ibm-header" },
  { id: "certifications-kaggle-header", source: "certifications", target: "kaggle-header" },
  { id: "certifications-udemy-header", source: "certifications", target: "udemy-header" }, // New Udemy Header Connection

  // DeepLearning.ai Certifications
  { id: "deep-learning-header-deep-learning", source: "deep-learning-header", target: "deep-learning" },
  { id: "deep-learning-header-ml-specialization", source: "deep-learning-header", target: "ml-specialization" },
  { id: "deep-learning-header-tensorflow-cert", source: "deep-learning-header", target: "tensorflow-cert" },

  // Google Certifications
  { id: "google-header-cybersecurity", source: "google-header", target: "cybersecurity" },
  { id: "google-header-data-analysis", source: "google-header", target: "data-analysis" },
  { id: "google-header-project-management", source: "google-header", target: "project-management" },

  // Meta Certifications
  { id: "meta-header-frontend-meta", source: "meta-header", target: "frontend-meta" },
  { id: "meta-header-backend-meta", source: "meta-header", target: "backend-meta" },

  // Duke University Certification duke-header-git-docker-cert
  { id: "duke-header-devops-cert", source: "duke-header", target: "devops-cert" },
  { id: "duke-header-docker-cert", source: "duke-header", target: "docker-cert" },
  { id: "duke-header-git-cert", source: "duke-header", target: "git-cert" },

  // IBM Certification
  { id: "ibm-header-eda-cert", source: "ibm-header", target: "eda-cert" },

  // Kaggle Certifications
  { id: "kaggle-header-kaggle-cert-intro", source: "kaggle-header", target: "kaggle-cert-intro" },
  { id: "kaggle-header-kaggle-cert-pandas", source: "kaggle-header", target: "kaggle-cert-pandas" },
  { id: "kaggle-header-kaggle-cert-feature", source: "kaggle-header", target: "kaggle-cert-feature" },
  { id: "kaggle-header-kaggle-cert-visualization", source: "kaggle-header", target: "kaggle-cert-visualization" },

  // Udemy Certifications
  { id: "udemy-header-genai-hf-langchain", source: "udemy-header", target: "genai-hf-langchain" },
  { id: "udemy-header-mlops-bootcamp", source: "udemy-header", target: "mlops-bootcamp" },
];