import { motion } from 'framer-motion';

const GlassmorphicCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`backdrop-blur-md bg-white/30 border border-white/20 shadow-xl ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphicCard; 