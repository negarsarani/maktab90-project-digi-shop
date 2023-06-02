import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const MotionSideBar = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
    transition={{
      duration: 5,
      delay: 0.3,
      ease: [0.5, 0.71, 1, 1.5],
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileHover={{ scale: 1.2 }}
  >
    {children}
  </motion.div>
);
export default MotionSideBar;
