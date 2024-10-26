export const accordionData = [
  // About Me Section
  {
    id: "about_me",
    header: "About Me",
    hasNestedItems: false,
    items: [
      {
        id: "about_me_paragraph",
        header: "Who Am I?",
        description: [
          "Hi, I'm Onur. I graduated from Bilkent University. While my main passion is Machine Learning, I've had the chance to explore many areas of software development — from frontend and backend to full-stack development, database management, project management, as well as data engineering and MLOps. I’ve led multiple projects during my college years, both for my courses and various competitions. Whether it’s building models, streamlining pipelines, or creating full-scale systems, I’m always ready to face challenges and keep improving my skills as an ML Engineer.",
        ],
      },
      {
        id: "education",
        header: "Education",
        description: [
          "Bachelor of Science (B.Sc.) in Computer Science - Bilkent University, Turkey (2019-2024)",
          "-> Top 500 (%0.0002) among the country in University Exam, Full Scholarship",
          "Izmir High School of Science (2015-2019)",
          "-> Top 10 (%0.00001) among the country in High School Entrance Exam",
        ],
      },
      {
        id: "hobies",
        header: "My Hobies",
        description: [
          "I enjoy playing strategy games like Hearts of Iron and Civ5. My passion for these games started when my mother bought the Age of Empires games when I was a child. Funny enough, I still play AoE 2 even after 15 years.",
          "I also enjoy story-driven games. I recently played God of War Ragnarok and Black Myth Wukong, both masterpieces with their art, story, and sheer work that went into building them." ,
          "I love watching TV series, particularly historical dramas. My favorites are The Last Kingdom and Da Vinci's Demons." ,
          "Lastly, I'm a PC building enthusiast. I started by repairing my laptops and recently built my desktop system. I enjoy optimizing every component for maximum performance, from overclocking the CPU and GPU to experimenting with advanced cooling solutions. ",
       ],
      },
    ],
  },
  // Certifications Section
  {
    id: "certifications_header",
    header: "Certifications",
    hasNestedItems: false,
    items: [
      {
        id: "deep_learning",
        header: "DeepLearning.ai Certificates",
        description: [
          "Deep Learning Specialization",
          "Machine Learning Specialization",
          "TensorFlow Specialization",
        ],
        link: "https://www.deeplearning.ai",
      },
      {
        id: "google_certificates",
        header: "Google Certificates",
        description: [
          "Intro to Cybersecurity",
          "Data Analysis",
          "Project Management",
        ],
      },
      {
        id: "backend_frontend_meta",
        header: "Meta Certificates",
        description: [
          "Meta Frontend Developer Specialization",
          "Meta Backend Developer Specialization",
        ],
      },
      {
        id: "kaggle_certificates",
        header: "Kaggle Certificates",
        description: [
          "Pandas",
          "Intro to Machine Learning",
          "Feature Engineering",
          "Data Visualization",
        ],
      },
      {
        id: "git_docker_devops",
        header: "Duke University Certificates",
        description: [
          "Git Certificate",
          "Docker Certificate",
          "DevOps Certificate",
        ],
      },
      {
        id: "eda_ibm",
        header: "IBM Certificates",
        description: [
          "EDA for Machine Learning",
        ],
        link: "https://www.ibm.com/training/certification",
      },
      {
        id: "udemy_certificates",
        header: "Udemy Certificates",
        description: [
          "Mlops Bootcamp",
          "GenAI with Langchain and Huggingface"
        ],
      },
    ],
  },
  
  // Work Experience Section
  {
    id: "work_experience_header",
    header: "Work Experience",
    hasNestedItems: true,
    items: [
      {
        id: "ford_otosan",
        header: "Data/Dev/ML(Ops) Intern @ Ford Otosan",
        description: [
          "Designed and implemented an end-to-end ETL pipeline for ADAS (Advanced Driver Assistance Systems), integrating Kafka for real-time data ingestion, distributed data processing, and Elastic for fast NoSQL database, logstash, and kibana to visualize the data and logs in a modern dashboard.",
          "Developed and deployed an anomaly detection model using TensorFlow and integrated it into the data pipeline. Also performed EDA, feature engineering, training and fine tuning on the data given.",
          "Utilized Kubernetes and Docker to containerize the entire pipeline, ensuring scalable and efficient deployment. Orchestrated the workflow using Apache Airflow, automating data flow and processing tasks.",
          "Authored an intern handbook for the ADAS team, detailing technologies, workflows, and onboarding for interns.",
        ],
        nestedItems: [
          {
            id: "pipeline_task",
            header: "End-to-End Data Pipeline",
            description: [
              "Integrated Kafka, PySpark, Elastic, and Logstash for distributed real-time data processing.",
              "Created a Kibana-based dashboard to visualize data and logs in real time.",
            ],
          },
          {
            id: "anomaly_detection_task",
            header: "Anomaly Detection Model",
            description: [
              "Developed and deployed a TensorFlow-based anomaly detection model.",
              "Performed feature engineering, model training, and hyperparameter tuning to ensure optimal performance.",
            ],
          },
        ],
      },
      {
        id: "tai_internship",
        header: "Software Engineer and ML Intern @ TAI",
        description: [
          "Developed and debugged features for unmanned aerial vehicles (UAVs) in Python and Java.",
          "Wrote a Python script that reduced documentation matching time by 50% using machine learning.",
        ],
      },
    ],
  },
  // Projects Section
  {
    id: "projects_header",
    header: "Projects",
    hasNestedItems: true,
    items: [
      {
        id: "nlp_projects",
        header: "Advanced NLP Projects with Deployment",
        description: [
          "Developed 15+ NLP projects utilizing a variety of technologies, including RNN, ANN, LSTM, GRU, and LLM models.",
          "Implemented solutions such as chatbots, Retrieval-Augmented Generation (RAG), and fine-tuning with Hugging Face models; deployed using NVIDIA NIM, CrewAI, and AstraDB.",
          "Utilized MLOps tools for streamlined workflows, orchestrated projects with Airflow, and established CI/CD pipelines to enhance deployment efficiency, combining various technologies like Langchain, GraphDB, Langgraph, and Streamlit.",
        ],
      },
      {
        id: "ml_projects",
        header: "End-to-End Machine Learning Projects",
        description: [
          "Developed 10+ end-to-end data pipelines for personal machine learning projects using MongoDB, Cassandra, S3, and MLflow for experiment tracking, along with DVC for data versioning.",
          "Implemented models with XGBoost, Random Forest, and Hugging Face, utilizing Scikit-learn, TensorFlow, and PyTorch for model development; orchestrated with Airflow and containerized using Docker.",
          "Deployed applications on AWS SageMaker and Bedrock, established CI/CD pipelines with GitHub Actions and CircleCI, and created interfaces with Flask, FastAPI, and Streamlit, integrating monitoring with Grafana.",
        ],
      },
      {
        id: "vigilant",
        header: "Vigilant ~ Award Winner Graduation Project",
        description: [
          "Led my team to develop end-to-end in-store analytics solutions with React, Firebase, Python, YOLO, and OpenCV for object detection, counting, and pathing from camera footage. Created a real-time dashboard for devs and customers.",
          "Achieved 10% shorter queues, 15% increase in peak-hour customers, and 95%+ object detection accuracy, leveraging a recommendation system with Neural Collaborative Filtering and Knowledge Graphs.",
        ],
      },
      {
        id: "pneumonia_detection",
        header: "Pneumonia Image Detection",
        description: [
          "Led team to develop pneumonia detection model using CNN's and transfer learning, achieving 94% accuracy and near human-level error (1-2%). Collaborated with doctors for labeling and augmentation; deployed using Streamlit and AWS. ",
        ],
      },
      {
        id: "airpreneurs",
        header: "Airpreneurs ~ Top Project Among the Program",
        description: [
          "Led team to optimize airport arrival time using A*, reinforcement learning, and clustering algorithms. Achieved a 6% reduction in time from arrival to gate during testing.",
        ],
      },
      {
        id: "blockchain_project",
        header: "Blockchain Projects",
        description: [
          "Developed two cryptocurrencies using Solidity and Python, focusing on secure, decentralized transaction systems.",
        ],
      },
      {
        id: "scraper_trading_project",
        header: "Twitter Sentiment Analysis Scraper for Trading",
        description: [
          "Coded a Twitter web scraper with sentiment analysis to predict price movements based on social media trends.",
        ],
      },
      {
        id: "ar_app_project",
        header: "AR App",
        description: [
          "Created an AR app during the COVID pandemic to enhance interactivity in online learning sessions, focusing on engagement and usability.",
        ],
      },
      {
        id: "opengl_project",
        header: "OpenGL Projects",
        description: [
          "Worked on OpenGL projects during a Computer Graphics class to create interactive visualizations and simulations, demonstrating expertise in 3D rendering and animation.",
        ],
      },
      {
        id: "erasmus_tracking_system",
        header: "Erasmus Tracking System",
        description: [
          "Developed an Erasmus tracking system as a team leader, managing workflows and automating the process for students applying for international programs.",
        ],
      },
    ],
  },
  
  
];
