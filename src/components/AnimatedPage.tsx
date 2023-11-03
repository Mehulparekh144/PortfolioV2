import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedPage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-10" }}
      transition={{ type: "tween", bounce: "0.5" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
