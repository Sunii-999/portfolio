import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, boxShadow: '0 4px 12px 0 rgba(60, 64, 67, 0.3)' } : {}}
      className={`bg-white rounded-xl google-shadow p-6 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;