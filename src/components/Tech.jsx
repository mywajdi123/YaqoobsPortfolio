import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -16, 0, 16, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, idx) => (
        <motion.div
          key={technology.name}
          className='w-28 h-28'
          variants={floatVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 3 + (idx % 6) * 0.2,
            delay: (idx % 6) * 0.1,
          }}
          style={{ willChange: "transform" }}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");