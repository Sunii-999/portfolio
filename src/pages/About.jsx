import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, ArrowRight } from 'lucide-react';

// Card component
const Card = ({ children, className }) => (
  <div className={`rounded-xl bg-white google-shadow p-6 ${className}`}>
    {children}
  </div>
);

// Custom button (if needed)
const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-google-blue text-white hover:bg-blue-600 focus:ring-google-blue google-shadow",
    secondary: "bg-white text-google-gray-700 border border-google-gray-300 hover:bg-google-gray-50 focus:ring-google-gray-500 google-shadow",
    ghost: "text-google-gray-700 hover:bg-google-gray-100 focus:ring-google-gray-500",
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Profile data
const myProfile = {
  name: "Stijn Walravens",
  title: "Full-stack Developer | Designer",
  subtitle: "Full-stack developer with a creative eye and detail-oriented mindset, eager to learn and create.",
  location: "Roosdaal, Belgium",
  email: "stijnjoeywalravens@gmail.com",
  skills: [
    { category: "Programming & Development", items: ["React", "React Native", "Next.js", "PHP", "Javascript", "Typescript", "CSS"] },
    { category: "Design & Communication", items: ["UI/UX", "Graphic Design", "Communication", "Independent Work"] },
    { category: "Tools & Others", items: ["Git", "Framer Motion", "Tailwind CSS", "Figma"] },
  ],
  experience: [
    {
      title: "Fullstack Developer",
      company: "Zoomers Gent",
      duration: "April 2025 - June 2025",
      description: "Upgraded the platform with new features and debugged existing functionalities using PHP. Collaborated closely with web designers to ensure optimal UI/UX. Solely responsible for the portfolio feature update and optimized the sales flow in the back office."
    }
  ],
  education: [
    { degree: "Degree in Programming", school: "Artevelde Hogeschool Gent", year: "2025", description: "Completed a degree in Programming." },
    { degree: "Interactive Media", school: "TI Don Bosco Halle", year: "2020", description: "Studied Interactive Media." },
    { degree: "Graphic Media", school: "TI Don Bosco Halle", year: "2019", description: "Studied Graphic Media." }
  ],
};

// Custom Card component
const CustomCard = ({ children, title, icon: Icon }) => (
  <Card className="p-6 h-full flex flex-col">
    <div className="flex items-center mb-4">
      <Icon className="text-google-blue mr-3" size={24} />
      <h3 className="text-xl font-medium text-google-gray-900">{title}</h3>
    </div>
    {children}
  </Card>
);

// Section wrapper
const SectionContainer = ({ children }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {children}
  </div>
);

// Section title
const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl font-light text-google-gray-900 mb-8 text-center"
  >
    {children}
  </motion.h2>
);

// About page
const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-google-gray-50">
      {/* SEO */}
      <Helmet>
        <title>Stijn Walravens | Full-Stack Developer & Designer</title>
        <meta
          name="description"
          content="About Stijn Walravens (Sunii) – Full-Stack Developer & Designer from Belgium. Explore my skills, experience, and education."
        />
        <meta property="og:title" content="About Stijn Walravens | Developer & Designer" />
        <meta
          property="og:description"
          content="Learn more about Stijn Walravens (Sunii), a Belgian Full-Stack Developer and Designer, including skills, experience, and education."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com/about" />
        <meta property="og:image" content="https://your-portfolio-url.com/img/my-profile-image.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 google-shadow">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 w-32 h-32 rounded-full overflow-hidden google-shadow-lg"
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQGK4JmSwU-ySw/profile-displayphoto-shrink_800_800/B4EZdBhlDEHcAc-/0/1749151011522?e=1762992000&v=beta&t=NIZLm6dqE5XyQCUy4sAzuZKLr94weObR6QRVT69uH2E" 
              alt="Profile Picture" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-google-gray-900 mb-2"
          >
            {myProfile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-google-blue font-medium mb-4"
          >
            {myProfile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-google-gray-600 max-w-2xl"
          >
            {myProfile.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills */}
        <SectionContainer>
          <SectionTitle>My Skills</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProfile.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <CustomCard title={skill.category} icon={Code}>
                  <ul className="list-none space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-google-gray-700 text-base flex items-center">
                        <ArrowRight size={16} className="text-google-blue mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Experience */}
        <SectionContainer>
          <SectionTitle>Experience</SectionTitle>
          <div className="grid grid-cols-1 gap-8">
            {myProfile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <CustomCard title={exp.title} icon={Briefcase}>
                  <p className="text-google-gray-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-google-gray-500 text-sm mb-4">{exp.duration}</p>
                  <p className="text-google-gray-700">{exp.description}</p>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Education */}
        <SectionContainer>
          <SectionTitle>Education</SectionTitle>
          <div className="grid grid-cols-1 gap-8">
            {myProfile.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <CustomCard title={edu.degree} icon={GraduationCap}>
                  <p className="text-google-gray-600 font-medium mb-1">{edu.school}</p>
                  <p className="text-google-gray-500 text-sm mb-4">{edu.year}</p>
                  <p className="text-google-gray-700">{edu.description}</p>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </main>
    </div>
  );
};

export default About;
