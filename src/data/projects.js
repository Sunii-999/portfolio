const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove all non-word chars except hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and repeated hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const portfolioData = {
  projects: [
    {
      id: 1,
      title: "DCLONE | Social Networking Platform",
      slug: createSlug("DCLONE | Social Networking Platform"), // dclone-social-networking-platform
      description: "A full-stack, interactive social media platform developed using Next.js, featuring a headless CMS (Strapi) for flexible content management and a sleek, responsive design with Tailwind CSS.",
      image: "/img/projects/dclone.png",
      technologies: ["Next.js", "Strapi (Headless CMS)", "Tailwind CSS", "Full Stack"],
      liveUrl: null,
      githubUrl: null, // Note: Consider making this repo public or adding a video demo link.
      featured: true,
      category: "Full Stack",
      completionDate: "2024-03",
      readme: null,
      figmaUrl: null, // New field added
      currentlyWorking: false, // New field added
    },
    {
      id: 2,
      title: "Comprehensive Back Office Data Management System",
      slug: createSlug("Comprehensive Back Office Data Management System"), // comprehensive-back-office-data-management-system
      description: "Developed a robust back-office application and database architecture for efficient data management and organization, utilizing CraftCMS and PHP for reliable backend operations.",
      image: "/img/projects/back.jpg",
      technologies: ["CraftCMS", "PHP", "Database Design"],
      liveUrl: null,
      githubUrl: "https://github.com/pgmgent-2425-datamanagement/custom-backoffice-pgm-stijwalr",
      featured: false,
      category: "Backend",
      completionDate: "2024-03",
      readme: null,
      figmaUrl: null, // New field added
      currentlyWorking: false, // New field added
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      slug: createSlug("Real-Time Chat Application"), // real-time-chat-application
      description: "Built a high-performance, real-time live chat application using ReactJS and NodeJS, capable of handling both secure one-on-one and scalable group messaging.",
      image: "/img/projects/chat-1.jpg",
      technologies: ["ReactJS", "Node.js", "WebSockets (Implied)", "Full Stack"],
      liveUrl: null,
      githubUrl: "https://github.com/walravensJS/Live-chat-NodeJS",
      featured: true,
      category: "Full Stack",
      completionDate: "2024-02",
      readme: null,
      figmaUrl: null, // New field added
      currentlyWorking: false, // New field added
    },
    {
      id: 4,
      title: "PGM-Platform (Academic Program Website)",
      slug: createSlug("PGM-Platform (Academic Program Website)"), // pgm-platform-academic-program-website
      description: "An official informational website for the 'Graduaat Programmeren' program at Artevelde University of Applied Sciences, built for accessibility and clear information architecture using React.js.",
      image: "/img/projects/pgm-1.jpg",
      technologies: ["React.js", "JavaScript", "Frontend Development"],
      liveUrl: "https://pgm-platform-pgm-stijwalr.onrender.com/",
      githubUrl: "https://github.com/pgmgent-pgm-4/pgm-platform-pgm-stijwalr",
      featured: false,
      category: "Frontend",
      completionDate: "2024-01",
      readme: null,
      figmaUrl: null, // Example Figma link
      currentlyWorking: false, // New field added
    },
    {
      id: 5,
      title: "Custom Logo Design | Dartscompetitie Druivenstreek",
      slug: createSlug("Custom Logo Design | Dartscompetitie Druivenstreek"), // custom-logo-design-dartscompetitie-druivenstreek
      description: "Created a professional, custom logo and branding material for the 'Dartscompetitie Druivenstreek' competition, focusing on visual appeal and brand identity.",
      image: "/img/projects/dd.jpg",
      technologies: ["Adobe Illustrator", "Graphic Design", "Branding"],
      liveUrl: "https://www.facebook.com/p/Druivenstreek-Darts-Open-61555411891609/",
      githubUrl: null,
      featured: false,
      category: "Design",
      completionDate: "2023-12",
      readme: null,
      figmaUrl: null, // New field added
      currentlyWorking: false, // New field added
    },
    {
      id: 6,
      title: "UX/UI Web Design | Casino Management System",
      slug: createSlug("UX/UI Web Design | Casino Management System"), // ux-ui-web-design-casino-management-system
      description: "A comprehensive web design and UX/UI project for a casino management system, focused on streamlining workflows and resolving operational inefficiencies through intuitive design.",
      image: "/img/projects/cms-1.jpg",
      technologies: ["Web Design", "UX/UI Design", "Information Architecture"],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      category: "Design",
      completionDate: "2023-11",
      readme: null,
      figmaUrl: null,
      currentlyWorking: false, // New field added
    },
    {
      id: 7,
      title: "Custom Text Editor / Google Docs Clone",
      slug: createSlug("Custom Text Editor / Google Docs Clone"), // custom-text-editor-google-docs-clone
      description: "A featured, collaborative rich text editor application, leveraging the power of Next.js and TypeScript to deliver a modern, performant, and reliable editing experience. This was built with Next.js, TipTap, Radix UI, Convex, Clerk, Liveblock. Features include: A toolbar / rich text editing using TipTap. (bold, italic, underline, highlight, links, tables, images, tasks, headings, etc.).  ",
      image: "/img/projects/custom-editor.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Collaboration Tools"],
      liveUrl: "https://custom-editor-tau.vercel.app/",
      githubUrl: "https://github.com/Sunii-999/custom-editor",
      featured: true,
      category: "Full Stack",
      completionDate: "07-10-2025",
      readme: '/readmes/custom-editor.md', // URL in public folder
      figmaUrl: null, // New field added
      currentlyWorking: false, // New field added
    },
    {
      id: 8,
      title: "TCG Collector",
      slug: createSlug("TCG Collector"),
      description: "Work in progress.",
      image: "/img/projects/portfolio-v2.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Design", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      category: "WIP",
      completionDate: null,
      readme: null,
      figmaUrl: "https://www.figma.com/design/fZ42BNFdcDPkpIUaGQn9sC/TCG-Project?node-id=0-1&t=yJZL2hvKGfa1wjpI-1",
      currentlyWorking: true, // Example of a project currently in progress
    }
  ],
  projectCategories: [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "Design",
    "WIP",
  ]
};

// Original export format (if you must keep it exactly as-is)
export const projects = portfolioData.projects;
export const projectCategories = portfolioData.projectCategories;