export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented real-time inventory management and order tracking.",
      image: "/images/project1.jpg", // Add your project images
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1",
      featured: true,
      category: "Full Stack",
      completionDate: "2024-01"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Analytics dashboard with AI-powered insights",
      longDescription: "Developed a modern analytics dashboard that uses machine learning algorithms to provide business insights. Features include data visualization, predictive analytics, and automated reporting.",
      image: "/images/project2.jpg",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/username/project2",
      featured: true,
      category: "AI/ML",
      completionDate: "2024-02"
    }
    // Add more projects here
  ];
  
  export const projectCategories = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "AI/ML",
    "Mobile"
  ];