import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1.5,
          staggerChildren: 1.6,
        },
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          opacity: 1,
          scale: 1.1,
          rotate: [360, -10],
        }}
        viewport={{ once: true }}
        className="w-full rounded-full absolute top-[30%] bg-primary/10 left-0 h-[500px]"
      />
    </motion.div>
  );
};

export default Projects;
