import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const MotionSideBar = ({ children }: { children: ReactNode }) => (
  <motion.div
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  >
    {children}
  </motion.div>
);
export default MotionSideBar;
