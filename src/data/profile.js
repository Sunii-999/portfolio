export const profile = {
    name: "Sunii",
    title: "Full Stack Developer | Designer",
    subtitle: "Building digital experiences with modern web technologies",
    email: "stijnjoeywalravens.com",
    location: "Roosdaal, Belgium",
    bio: "I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. I love creating efficient, scalable solutions and beautiful user experiences.",
    
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
      },
      {
        category: "Tools & Others",
        items: ["Git", "Docker", "AWS", "Figma", "Jest"]
      }
    ],
  
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Company",
        duration: "2022 - Present",
        description: "Lead frontend development for multiple projects using React and modern web technologies."
      }
      // Add more experience
    ],
  
    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "University Name",
        year: "2020",
        description: "Focused on software engineering and web development"
      }
    ],
  
    social: {
      github: "https://github.com/walravensJS",
      linkedin: "https://www.linkedin.com/in/stijn-walravens/",
      email: "stijnjoeywalravens@gmail.com"
    }
  };
  
  // This will be populated with your resume data
  export const updateProfile = (resumeData) => {
    // Function to update profile with resume information
    return {
      ...profile,
      ...resumeData
    };
  };