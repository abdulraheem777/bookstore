import { motion } from 'framer-motion';

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 