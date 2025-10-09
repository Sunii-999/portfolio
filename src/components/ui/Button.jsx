import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-google-blue text-white hover:bg-blue-600 focus:ring-google-blue google-shadow",
    secondary: "bg-white text-google-gray-700 border border-google-gray-300 hover:bg-google-gray-50 focus:ring-google-gray-500 google-shadow",
    ghost: "text-google-gray-700 hover:bg-google-gray-100 focus:ring-google-gray-500",
    featured: "bg-yellow-200 text-google-gray-700 border border-google-gray-300 hover:bg-yellow-500 focus:ring-google-gray-500 google-shadow",
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

export default Button;