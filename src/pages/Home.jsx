import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  const fetchFeaturedProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredProjects = fetchFeaturedProjects.slice().sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen pt-16">
      {/* SEO */}
      <Helmet>
        <title>Home | Stijn Walravens Portfolio</title>
        <meta
          name="description"
          content="Welcome to Stijn Walravens' portfolio. Explore web development, UI/UX design projects, and more."
        />
        <meta property="og:title" content="Home | Stijn Walravens Portfolio" />
        <meta
          property="og:description"
          content="Check out Stijn Walravens' portfolio featuring web development, design, and featured projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:image" content="https://your-portfolio-url.com/img/home-cover.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-light text-google-gray-900 mb-6"
            >
              Hello, I'm{' '}
              <span className="font-medium text-google-blue">{profile.name}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl sm:text-2xl text-google-gray-600 mb-8 max-w-3xl mx-auto"
            >
              People also know me by my real name Stijn
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/projects">
                <Button size="lg" className="min-w-[140px]">
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="/stijnwalravens-resume.pdf" download="stijnwalravens-resume.pdf">
                <Button variant="secondary" size="lg">
                  Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex justify-center space-x-6"
>
  {[
    { icon: Github, url: profile.social.oldGithub, label: 'Old GitHub' },
    { icon: Github, url: profile.social.github, label: 'New GitHub' },
    { icon: Linkedin, url: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${profile.social.email}`, label: 'Email' },
  ].map(({ icon: Icon, url, label }) => (
    <div key={label} className="flex flex-col items-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-google-gray-100 hover:bg-google-gray-200 transition-colors duration-200"
        aria-label={label}
      >
        <Icon size={24} className="text-google-gray-700" />
      </a>
      <span className="text-xs text-google-gray-600 mt-2">{label}</span>
    </div>
  ))}
</motion.div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-google-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-google-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-google-gray-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link to={`/project/${project.slug}`} className="block h-full hover:shadow-lg transition-shadow duration-300">
                  <Card className="h-full">
                    <div className="aspect-video bg-google-gray-200 rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-google-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-google-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-google-blue/10 text-google-blue text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button variant="secondary" size="lg">
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
