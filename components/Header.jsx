import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between mx-auto z-20 xl:items-center">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        {/* NAME */}

        <motion.div
          initial={{
            x: -300,
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className=" bg-dark border-2 border-light font-bold tracking-wider rounded-full text-light animate-pulse w-10 h-10 flex items-center justify-center"
        >
          <Link href="#hero">JB</Link>
        </motion.div>

        {/* SOCIAL ICONS */}

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="flex gap-2 justify-center items-center"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon
              url="https://github.com/JoaoBorges1010"
              target="blank"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon
              url="https://www.linkedin.com/in/joaoborges1010"
              target="blank"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon
              url="https://www.facebook.com/Testaz"
              target="blank"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon
              url="https://www.instagram.com/joaoborges1010"
              target="blank"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
