import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Button from '../components/ui/Button';
// Assuming 'projects' is the same array you imported in Projects.jsx
import { projects } from '../data/projects'; 

const ProjectDetail = () => {
  // 🐛 FIX: Destructure 'slug' to match the route parameter /project/:slug
  const { slug } = useParams();

  // Find the corresponding project using its slug
  const project = projects.find(p => p.slug === slug); // 🐛 FIX: Use 'slug' here

  // Scroll to the top when navigating to a new project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]); // 🐛 FIX: Depend on 'slug'

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-light text-google-gray-900 mb-4">
            Project Not Found 🧐
          </h1>
          <p className="text-google-gray-600 mb-6">
            The project you're looking for might not exist.
          </p>
          <Link to="/projects">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Back to All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // --- Component Rendering ---
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Link to="/projects" className="inline-flex items-center text-google-blue hover:underline">
              <ArrowLeft size={18} className="mr-2" />
              <span className="font-medium">Back to All Projects</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-light text-google-gray-900 mb-3">
              {project.title}
            </h1>
            <p className="text-xl text-google-gray-600">
              {project.description}
            </p>
          </motion.div>

          {/* Project Links & Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-12 border-b border-google-gray-200 pb-6"
          >
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </a>
            )}
            <span className="ml-auto px-3 py-1 bg-google-gray-100 text-google-gray-600 text-sm font-medium rounded-full">
              Category: {project.category}
            </span>
          </motion.div>

          {/* Main Content (Image and Details) */}
          <div className="space-y-10">
            {/* Image/Media */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl overflow-hidden google-shadow-xl border border-google-gray-100"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="aspect-video w-full flex items-center justify-center bg-google-gray-200 text-google-gray-400 p-8">
                  <span className="text-lg">No primary visual available</span>
                </div>
              )}
            </motion.div>

            {/* Detailed Description/Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-medium text-google-gray-900 mb-4">
                Project Overview
              </h2>
              <p className="text-lg text-google-gray-700 leading-relaxed">
                {/* NOTE: You should replace this static text with a detailed description 
                  field from your actual 'project' data object if available.
                */}
                This is the in-depth area for your project. You can describe the problem it solves, the architecture, the specific technical challenges you overcame, and future plans. This provides much more context than the short description on the main page.
              </p>
            </motion.div>

            {/* Technologies Used (Already present in the Card but good to repeat here) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-medium text-google-gray-900 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-google-blue/10 text-google-blue text-sm font-medium rounded-full border border-google-blue/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;