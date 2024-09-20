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
          "I am Onur Asim Ilhan, a Computer Science graduate from Bilkent University with a full scholarship. I have a strong background in Data Engineering, MLOps, and Software Engineering, with a passion for machine learning and DevOps. I led multiple award-winning projects and have expertise in designing end-to-end pipelines, deploying models, and working with cutting-edge technologies such as TensorFlow, PySpark, Kubernetes, and more. My goal is to become a top ML Engineer by continuously improving and contributing to impactful projects.",
        ],
      },
      {
        id: "education",
        header: "Education",
        description: [
          "Bachelor of Science (B.Sc.) in Computer Science - Bilkent University, Turkey (2019-2024)",
          "Top 500 in University Exam, Full Scholarship",
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
          header: "Deep Learning Specialization by DeepLearning.AI",
          description: ["Completed all five courses on neural networks and deep learning."],
          link: "https://www.deeplearning.ai/program/deep-learning-specialization/",
        },
        {
          id: "eda_ibm",
          header: "EDA for Machine Learning Certificate by IBM",
          description: ["Learned how to perform exploratory data analysis (EDA) for machine learning projects."],
          link: "https://www.ibm.com/training/certification",
        },
        {
          id: "backend_frontend_meta",
          header: "Backend and Frontend Development Professional Specialization by Meta",
          description: ["Achieved mastery in both backend and frontend web development, focusing on full-stack applications."],
        },
        {
          id: "git_docker_devops",
          header: "Git, Docker, and DevOps Certificate by Duke University & Mosh Academy",
          description: ["Gained expertise in version control, containerization, and continuous integration/continuous delivery (CI/CD)."],
        },
        {
          id: "google_certificates",
          header: "Cybersecurity, Data Analysis, and Project Management Certificates by Google",
          description: ["Learned essential cybersecurity, data analysis, and project management skills through Google's certificate programs."],
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
          "Designed and implemented an end-to-end data pipeline for ADAS (Advanced Driver Assistance Systems), integrating Kafka for real-time data ingestion, PySpark for distributed data processing, and Elastic for fast NoSQL database, logstash, and kibana to visualize the data and logs in a modern dashboard.",
          "Developed and deployed an anomaly detection model using TensorFlow and integrated it into the data pipeline. Performed EDA, feature engineering, training and fine-tuning on the data provided.",
          "Utilized Kubernetes and Docker to containerize the entire pipeline, ensuring scalable and efficient deployment.",
          "Orchestrated the workflow using Apache Airflow, automating data flow and processing tasks.",
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
        id: "vigilant",
        header: "Vigilant ~ Award Winner Graduation Project",
        description: [
          "As a team leader, I worked on computer vision with OpenCV and YOLO libraries.",
          "Created a real-time dashboard and helped build prediction algorithms for future forecasting.",
        ],
      },
      {
        id: "pneumonia_detection",
        header: "Pneumonia Image Detection",
        description: [
          "Led a team in developing a pneumonia detection system for pediatric cases using CNNs and transfer learning techniques, achieving high accuracy (~94%).",
        ],
      },
      {
        id: "airpreneurs",
        header: "Airpreneurs ~ Top Project Among the Program",
        description: [
          "Led my team in developing an app to reduce arrival time to airports using machine learning techniques: clustering, reinforcement learning, and route optimization technique A*.",
          "Managed to achieve ~8% time savings across multiple use cases.",
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
