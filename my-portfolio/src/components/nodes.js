import mllogos from '../assets/ml-logo.svg';
import pipeline from '../assets/devops.png';
import backend from '../assets/backend.png';
import frontend from '../assets/ui.png';
import softskills from '../assets/competence.png';
import database from '../assets/database.png';
import keras from '../assets/Keras.svg';
import hug from '../assets/hug.png';
import xg from '../assets/xgboost-e1606751248237.png';
import dl from "../assets/dl.png";
import duke from "../assets/duke.png";
const pythonIcon = "https://www.vectorlogo.zone/logos/python/python-icon.svg";
export const nodes = [
  { id: "center", label: "Onur's Skill Map" },

  // Main Categories
  { id: "machine-learning", label: "Machine Learning", icon: mllogos,  },
  { id: "data-pipeline", label: "Dev/Data/ML(ops)", icon: pipeline },
  { id: "backend", label: "Backend", icon: backend },
  { id: "frontend", label: "Frontend", icon:frontend },
  { id: "database", label: "Database", icon: database },
  { id: "soft-skills", label: "Soft Skills", icon:softskills },

  // Machine Learning Sub-nodes
  { id: "python-ml", label: "Python", icon: pythonIcon},
  { id: "tensorflow", label: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { id: "keras", label: "Keras", icon: keras },
  { id: "pytorch", label: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
  { id: "huggingface", label: "HuggingFace", icon: hug },
  { id: "xgboost", label: "XGBoost", icon:xg },
  
  { id: "lightgbm", label: "LightGBM", icon: "" },
  { id: "opencv", label: "OpenCV", icon: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
  { id: "anomaly-detection", label: "Anomaly Detection" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "llm", label: "LLM" },
  { id: "pandas", label: "Pandas", icon: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
  { id: "scikit-learn", label: "Scikit-learn", icon: "https://www.vectorlogo.zone/logos/scikit_learn/scikit_learn-icon.svg" },
  { id: "cnns", label: "CNNs" },
  { id: "rnns", label: "RNNs" },
  { id: "transfer-learning", label: "Transfer Learning" },
  { id: "reinforcement-learning", label: "Reinforcement Learning" },
  { id: "kaggle", label: "Kaggle", icon: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" },
  { id: "jupyter", label: "Jupyter", icon: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg" },
  { id: "google-colab", label: "Google Colab", icon: "https://www.vectorlogo.zone/logos/google_colab/google_colab-icon.svg" },
  { id: "docker", label: "Docker"},
  {id: "kubernetes", label: "Kubernetes"},

  // Data Pipeline Sub-nodes
  { id: "airflow", label: "Airflow", icon: "https://www.svgrepo.com/show/353380/airflow.svg" },
  { id: "kafka", label: "Kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
  { id: "pyspark", label: "PySpark", icon: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
  { id: "spark", label: "Spark", icon: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
  { id: "logstash", label: "Logstash", icon: "https://www.vectorlogo.zone/logos/elasticco_logstash/elasticco_logstash-icon.svg" },
  { id: "elk-stack", label: "ELK Stack", icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
  { id: "mlflow", label: "MLFlow", icon: "https://www.vectorlogo.zone/logos/mlflow/mlflow-icon.svg" },
  { id: "github-actions", label: "GitHub Actions", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
   {id: "git", label:"Git/Version Control"},
  // Backend Sub-nodes
  { id: "django", label: "Django", icon: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" },
  { id: "fastapi", label: "FastAPI", icon: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
  { id: "flask", label: "Flask", icon: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
  { id: "graphql", label: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
  { id: "restapi", label: "RestAPI" },
  { id: "nodejs", label: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { id: "php", label: "PHP", icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
  { id: "python-backend", label: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { id: "postman", label: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },


  // Frontend Sub-nodes
  { id: "javascript", label: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
  { id: "typescript", label: "TypeScript", icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
  { id: "react", label: "React", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { id: "tailwindcss", label: "TailwindCSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { id: "bootstrap", label: "Bootstrap", icon: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" },
  { id: "figma", label: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },

  // Database Sub-nodes
  { id: "mysql", label: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { id: "mssql", label: "MSSQL", icon: "https://www.vectorlogo.zone/logos/microsoft_sql_server/microsoft_sql_server-icon.svg" },
  { id: "mongodb", label: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { id: "elastic", label: "Elastic", icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
  { id: "firebase", label: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },


  // Soft Skills Sub-nodes
  { id: "leadership", label: "Leadership" },
  { id: "collaboration", label: "Collaboration" },
  { id: "problem-solving", label: "Problem-solving" },
  { id: "jira", label: "Jira", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
  { id: "doors", label: "Doors" },
  { id: "slack", label: "Slack", icon: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
];
export const aboutMeCertificationsNodes = [
  // About Me Nodes
  { id: "about-me", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "hobies", label: "Hobbies" },

  // Education-related nodes
  { id: "bilkent-university", label: "Bilkent University" },
  { id: "izmir-science-highschool", label: "Izmir Science Highschool" },

  // Hobbies-related nodes
  { id: "gaming", label: "Strategy & Story Games" },
  { id: "serieses", label: "Watching TV Series" },
  { id: "pc-building", label: "PC Building" },

  // Certifications Nodes
  { id: "certifications", label: "Certifications" },
  { id: "deep-learning-header", label: "DeepLearning.ai Certs", icon: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg" },
  { id: "google-header", label: "Google Certs", icon: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg" },
  { id: "meta-header", label: "Meta Certs", icon: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg" },
  { id: "duke-header", label: "Duke Univ. Certs", icon: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg" },
  { id: "ibm-header", label: "IBM Certs", icon: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg" },
  { id: "kaggle-header", label: "Kaggle Certs", icon: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" },
  { id: "udemy-header", label: "Udemy Certs", icon: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg" }, // New Udemy Header

  // Individual Certifications
  { id: "deep-learning", label: "Deep Learning Spec.", icon: dl },
  { id: "ml-specialization", label: "ML Spec.", icon: dl },
  { id: "tensorflow-cert", label: "TensorFlow Spec.", icon: dl },
  { id: "cybersecurity", label: "Intro to Cybersecurity", icon: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
  { id: "data-analysis", label: "Data Analysis", icon: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
  { id: "project-management", label: "Project Mgmt.", icon: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
  { id: "frontend-meta", label: "Meta Frontend Dev. Spec.", icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
  { id: "backend-meta", label: "Meta Backend Dev. Spec.", icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },



  { id: "devops-cert", label: "Devops Cert.", icon: duke },
  { id: "docker-cert", label: "Docker Cert.", icon: duke },
  { id: "git-cert", label: "Git Cert.", icon: duke },
  
  { id: "eda-cert", label: "EDA for ML", icon: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg" },

  // New Certifications
  { id: "kaggle-cert-intro", label: "Intro to Machine Learning", icon: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" },
  { id: "kaggle-cert-pandas", label: "Pandas", icon: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" },
  { id: "kaggle-cert-feature", label: "Feature Engineering", icon: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" },
  { id: "kaggle-cert-visualization", label: "Data Visualization", icon: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" },
  { id: "genai-hf-langchain", label: "GenAI with HF & Langchain", icon: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg" },
  { id: "mlops-bootcamp", label: "MLOps Bootcamp", icon: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg" },
];