// color values: 'accent' | 'blue' | 'emerald' | 'pink'
export const projects = [
  {
    title: 'CivicFlow – AI Driven Civic Intelligence',
    description:
      'AI-driven civic reporting system leveraging RAG pipelines and duplicate detection to enhance validation efficiency and optimize issue processing workflows.',
    fullDescription:
      'CivicFlow addresses civic reporting inefficiency by combining RAG-based duplicate detection with multimodal computer vision. Using CLIP, YOLOv8, and PRNU, the system performs image verification, intelligent issue classification, and automated routing of civic reports — drastically reducing manual review overhead.',
    tech: ['Python', 'RAG Pipelines', 'CLIP', 'YOLOv8', 'PRNU', 'LLM'],
    metric: 'Automated multimodal issue routing',
    github: null,
    live: null,
    color: 'accent',
  },
  {
    title: 'EDUOS – College Management SaaS',
    description:
      'AI-powered college management platform with automated attendance tracking, marks management, AI-assisted resume generation, and role-based dashboards.',
    fullDescription:
      'EDUOS is a full-featured SaaS platform built with React, Node.js, and Firebase. It provides role-based dashboards for students, faculty, and administrators, automated attendance and marks workflows, real-time analytics, an AI chatbot for student support, and an AI-assisted resume builder.',
    tech: ['React', 'Node.js', 'Firebase', 'REST APIs', 'AI Chatbot'],
    metric: 'Full SaaS with AI chatbot & resume gen',
    github: null,
    live: null,
    color: 'blue',
  },
  {
    title: 'Fall Detection – Wearable Device',
    description:
      'Intelligent wearable monitoring system using sensor fusion (accelerometer + heart rate) with cluster analysis for real-time fall detection and physiological monitoring.',
    fullDescription:
      'An embedded ML solution that fuses accelerometer and heart rate sensor streams to detect falls and abnormal movement patterns in real time. Built cluster analysis–based activity classification models with Python and Scikit-learn, enabling accurate differentiation between normal activity and fall events.',
    tech: ['Python', 'Scikit-learn', 'Sensor Fusion', 'Cluster Analysis'],
    metric: 'Real-time fall detection',
    github: null,
    live: null,
    color: 'emerald',
  },
];
