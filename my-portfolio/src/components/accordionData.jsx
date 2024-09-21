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
          "Details to be added...",
        ],
      },
      {
        id: "git_docker_devops",
        header: "Duke University Certificates",
        description: [
          "Git",
          "Docker",
          "DevOps",
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
