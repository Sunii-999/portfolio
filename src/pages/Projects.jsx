import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, FigmaIcon, } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { projects, projectCategories } from '../data/projects';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    const categoryFiltered = selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
    return categoryFiltered.slice().sort((a, b) => b.id - a.id);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-16">
      {/* SEO */}
      <Helmet>
        <title>Projects | Stijn Walravens Portfolio</title>
        <meta
          name="description"
          content="Explore Stijn Walravens' projects – a collection of web and design work showcasing skills in React, Next.js, PHP, UI/UX, and more."
        />
        <meta property="og:title" content="Projects | Stijn Walravens Portfolio" />
        <meta
          property="og:description"
          content="Check out Stijn Walravens' portfolio projects including web development, UI/UX, and design work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com/projects" />
        <meta property="og:image" content="https://your-portfolio-url.com/img/projects-cover.png" />
      </Helmet>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-light text-google-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-google-gray-600 max-w-2xl mx-auto">
              A collection of work showcasing my skills across different technologies and domains.
            </p>
          </motion.div>

          {/* Filters (omitted for brevity, no changes here) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap justify-center gap-2">
              {projectCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-google-blue text-white'
                      : 'bg-google-gray-100 text-google-gray-700 hover:bg-google-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Dropdown (omitted for brevity, no changes here) */}
            <div className="md:hidden">
              <Button
                variant="secondary"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full justify-between"
              >
                <span>{selectedCategory}</span>
                <Filter size={16} />
              </Button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 bg-white rounded-lg google-shadow-lg border border-google-gray-200"
                  >
                    {projectCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-google-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                          selectedCategory === category
                            ? 'text-google-blue bg-google-blue/5'
                            : 'text-google-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/project/${project.slug}`} className="block h-full">
                    <Card className="h-full group">
                      <div className="aspect-video bg-google-gray-200 rounded-lg mb-4 overflow-hidden">
                        {project.currentlyWorking === false ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-google-gray-400">
                            <span className="text-sm">Work in progress</span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center"> {/* New container for title and WIP tag */}
                            <h3 className="text-lg font-medium text-google-gray-900 group-hover:text-google-blue transition-colors mr-2">
                              {project.title}
                            </h3>
                            {project.currentlyWorking === false ? (
                              <span className="px-2 py-1 bg-google-gray-100 text-google-gray-600 text-xs rounded-full whitespace-nowrap ml-2">
                                {project.category}
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full whitespace-nowrap ml-2">
                                WIP
                              </span>
                            )}
                            
                          </div>
                          
                          
                        </div>

                        <p className="text-google-gray-600 mb-4 flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-google-blue/10 text-google-blue text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2 mt-auto">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button size="sm" className="w-full">
                                <ExternalLink size={14} className="mr-1" />
                                Live Demo
                              </Button>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="secondary" size="sm" className="w-full">
                                <Github size={14} className="mr-1" />
                                Code
                              </Button>
                            </a>
                          )}
                          {project.figmaUrl && (
                            <a
                              href={project.figmaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button
                                variant="secondary"
                                size="sm"
                                className="w-full text-white bg-slate-950 hover:text-white hover:bg-slate-800"
                              >
                                <FigmaIcon
                                  size={14}
                                  className="mr-1"
                                />
                                Figma
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State (omitted for brevity, no changes here) */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-google-gray-500 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;