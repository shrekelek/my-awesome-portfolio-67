export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description:
      "Built a gradient boosting model to predict customer churn with 94% accuracy. Reduced false negatives by 32% through threshold tuning and feature engineering.",
    tags: ["Python", "XGBoost", "scikit-learn", "Pandas"],
    image: "/images/project-churn.jpg",
    link: "#",
    github: "#",
    year: "2024",
  },
  {
    id: "sales-forecasting-dashboard",
    title: "Sales Forecasting Dashboard",
    description:
      "Developed an interactive forecasting dashboard using Prophet and Streamlit. Enabled stakeholders to visualize trends and seasonality across 12 regions.",
    tags: ["Prophet", "Streamlit", "Time Series", "Plotly"],
    image: "/images/project-forecast.jpg",
    link: "#",
    github: "#",
    year: "2024",
  },
  {
    id: "sentiment-analysis-nlp",
    title: "Sentiment Analysis Pipeline",
    description:
      "Created an end-to-end NLP pipeline to classify product reviews. Fine-tuned a transformer model and deployed it as a REST API with FastAPI.",
    tags: ["NLP", "Hugging Face", "FastAPI", "Docker"],
    image: "/images/project-nlp.jpg",
    link: "#",
    github: "#",
    year: "2023",
  },
  {
    id: "credit-risk-scoring",
    title: "Credit Risk Scoring",
    description:
      "Engineered a credit risk model using logistic regression and random forests. Implemented model monitoring and explainability with SHAP values.",
    tags: ["Risk Modeling", "SHAP", "Logistic Regression", "MLflow"],
    image: "/images/project-risk.jpg",
    link: "#",
    github: "#",
    year: "2023",
  },
  {
    id: "recommendation-engine",
    title: "Product Recommendation Engine",
    description:
      "Built a collaborative filtering recommendation system serving personalized product suggestions to 50K+ users with sub-100ms latency.",
    tags: ["Recommender Systems", "Matrix Factorization", "Redis", "AWS"],
    image: "/images/project-recommendation.jpg",
    link: "#",
    github: "#",
    year: "2023",
  },
  {
    id: "anomaly-detection",
    title: "Real-Time Anomaly Detection",
    description:
      "Designed an unsupervised anomaly detection system for server metrics using isolation forests and streaming data pipelines.",
    tags: ["Anomaly Detection", "Kafka", "Spark", "Isolation Forest"],
    image: "/images/project-anomaly.jpg",
    link: "#",
    github: "#",
    year: "2022",
  },
];
