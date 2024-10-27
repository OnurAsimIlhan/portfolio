import mllogos from '../assets/ml-logo.svg';
import pipeline from '../assets/devops.png';
import backend from '../assets/backend.png';
import frontend from '../assets/ui.png';
import softskills from '../assets/competence.png';
import database from '../assets/database.png';

import keras from '../assets/Keras.png';
import hug from '../assets/hug.png';
import xg from '../assets/xgboost-e1606751248237.png';
import dl from "../assets/dl.png";
import duke from "../assets/duke.png";

// Dynamic icon links
const tensorflowIcon = "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg";
const pytorchIcon = "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg";
const sklearnIcon = "";
const opencvIcon = "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg";
const pandasIcon = "https://cdn.worldvectorlogo.com/logos/pandas.svg";
const kaggleIcon = "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg";
const djangoIcon = "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg";
import flaskIcon from "../assets/Flask.png";
const fastapiIcon = "https://cdn.worldvectorlogo.com/logos/fastapi.svg";
const graphqlIcon = "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg";
const postmanIcon = "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg";
const reactjsIcon = "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg";
const tailwindIcon = "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg";
const bootstrapIcon = "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg";
const javascriptIcon = "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg";
const typescriptIcon = "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg";
const figmaIcon = "https://www.vectorlogo.zone/logos/figma/figma-icon.svg";
const mysqlIcon = "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg";
const postgresqlIcon = "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg";
const mongodbIcon = "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg";
const firebaseIcon = "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg";
import cassandraIcon from "../assets/cassandra-svgrepo-com.svg";
const elkStackIcon = "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg";
import airflowIcon from "../assets/Apache Airflow.png";
const kafkaIcon = "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg";
const gitIcon = "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg";
const githubActionsIcon = "https://www.vectorlogo.zone/logos/github/github-icon.svg";
import mlflowIcon from "../assets/mlflow-black.svg";
const dockerIcon = "https://www.vectorlogo.zone/logos/docker/docker-icon.svg";
const kubernetesIcon = "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg";
import awsIcon from "../assets/AWS-Cloud-logo_32.svg";
import s3Icon from "../assets/Arch_Amazon-Simple-Storage-Service_64.svg";
import ec2Icon from "../assets/EC2-instance-contents_32.svg";
const bert = "";
const llama = "";
const mistral = "";
const gpt = "";
import streamlit from "../assets/Streamlit.png";
const restapi = "";
import jinja from "../assets/jinja-svgrepo-com.svg";
import rds from '../assets/Arch_Amazon-RDS_64.svg';
const circleai = "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg";
import dvc from "../assets/dvc-svgrepo-com.svg";
const dagshub = "";
const grafana = "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg";
const nvidia_nim = "https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg";
const groq = "";
import sagemaker from '../assets/Arch_Amazon-SageMaker_64.png';
import bedrock from '../assets/Arch_Amazon-Bedrock_64.svg';
import apigateway from '../assets/Arch_Amazon-API-Gateway_64.svg';
import lambda from '../assets/Arch_AWS-Lambda_64.svg';
const slack = "https://www.vectorlogo.zone/logos/slack/slack-icon.svg";
const jira = "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg";
const doors = "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg";

export const nodes = [
  { id: "center", label: "Onur's Skillmap" },

  // Main Categories
  { id: "ml-dl-node", label: "ML & DL", icon: mllogos },
  { id: "backend-node", label: "Backend", icon: backend },
  { id: "frontend-node", label: "Frontend", icon: frontend },
  { id: "databases-node", label: "Databases", icon: database },
  { id: "dev-data-mlops-node", label: "Dev/Data/ML(Ops)", icon: pipeline },
  { id: "cloud-node", label: "Cloud", icon: awsIcon },
  { id: "soft-skills-node", label: "Soft Skills", icon: softskills },

  // ML & DL
  { id: "tensorflow", label: "TensorFlow", icon: tensorflowIcon },
  { id: "pytorch", label: "PyTorch", icon: pytorchIcon },
  { id: "scikit-learn", label: "Scikit-learn", icon: sklearnIcon },
  { id: "keras", label: "Keras", icon: keras },
  { id: "huggingface", label: "Hugging Face", icon: hug },
  { id: "cnns", label: "CNNs" },
  { id: "rnns", label: "RNNs" },
  { id: "transformers", label: "Transformers" },
  { id: "bert", label: "BERT", icon: bert},
  { id: "transfer-learning", label: "Transfer Learning" },
  { id: "fine-tuning", label: "Fine-Tuning" },
  { id: "quantization", label: "Quantization" },
  { id: "lora", label: "LoRA" },
  { id: "anomaly-detection", label: "Anomaly Detection" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "xgboost", label: "XGBoost", icon: xg },
  { id: "opencv", label: "OpenCV", icon: opencvIcon },
  { id: "pandas", label: "Pandas", icon: pandasIcon },
  { id: "gpt", label: "GPT", icon: gpt },
  { id: "llama", label: "LLama", icon: llama },
  { id: "mistral", label: "Mistral", icon: mistral },
  { id: "kaggle", label: "Kaggle", icon: kaggleIcon },


  // Backend
  { id: "django", label: "Django", icon: djangoIcon },
  { id: "flask", label: "Flask", icon: flaskIcon },
  { id: "fastapi", label: "FastAPI", icon: fastapiIcon },
  { id: "streamlit", label: "Streamlit", icon: streamlit},
  { id: "restapi", label: "REST API", icon: restapi},
  { id: "graphql", label: "GraphQL", icon: graphqlIcon },
  { id: "postman", label: "Postman", icon: postmanIcon },
  { id: "jinja2", label: "Jinja2", icon: jinja },

  // Frontend
  { id: "reactjs", label: "React.js", icon: reactjsIcon },
  { id: "tailwind", label: "Tailwind", icon: tailwindIcon },
  { id: "bootstrap", label: "Bootstrap", icon: bootstrapIcon},
  { id: "javascript", label: "JavaScript", icon: javascriptIcon},
  { id: "typescript", label: "TypeScript", icon: typescriptIcon },
  { id: "figma", label: "Figma", icon: figmaIcon},

  // Databases
  { id: "mysql", label: "MySQL", icon: mysqlIcon },
  { id: "postgresql", label: "PostgreSQL", icon: postgresqlIcon },
  { id: "rds", label: "RDS (AWS)", icon: rds },
  { id: "mongodb", label: "MongoDB", icon: mongodbIcon },
  { id: "firebase", label: "Firebase", icon: firebaseIcon },
  { id: "cassandra", label: "Cassandra", icon: cassandraIcon },
  { id: "elk-stack", label: "ELK Stack", icon: elkStackIcon},

  // Dev/Data/ML(Ops)

  { id: "airflow", label: "Airflow/Astro", icon: airflowIcon },
  { id: "kafka", label: "Kafka", icon: kafkaIcon },
  { id: "etl", label: "ETL" },
  { id: "git", label: "Git", icon: gitIcon },
  { id: "github-actions", label: "GitHub Actions", icon: githubActionsIcon },
  { id: "circleci", label: "CircleCI", icon: circleai},
  { id: "mlflow", label: "MLflow", icon: mlflowIcon },
  { id: "dvc", label: "DVC", icon: dvc },
  { id: "dagshub", label: "DagsHub", icon: dagshub},
  { id: "docker", label: "Docker", icon: dockerIcon },
  { id: "kubernetes", label: "Kubernetes", icon: kubernetesIcon },
  { id: "grafana", label: "Grafana", icon: grafana },
  { id: "nvidia-nim", label: "Nvidia-NIM", icon: nvidia_nim },
  { id: "groq", label: "Groq", icon: groq },
  { id: "lpu", label: "LPU" },


  // Cloud
  { id: "aws", label: "AWS", icon: awsIcon},
  { id: "sagemaker", label: "SageMaker", icon: sagemaker },
  { id: "bedrock", label: "Bedrock", icon: bedrock},
  { id: "s3", label: "S3", icon: s3Icon },
  { id: "ec2", label: "EC2", icon: ec2Icon},
  { id: "api-gateway", label: "API Gateway", icon: apigateway },
  { id: "lambda", label: "Lambda", icon: lambda },

  // Soft Skills
  { id: "agile", label: "Agile" },
  { id: "scrum", label: "Scrum" },
  { id: "jira", label: "Jira", icon: jira },
  { id: "doors", label: "Doors", icon: doors },
  { id: "slack", label: "Slack", icon: slack },

  
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