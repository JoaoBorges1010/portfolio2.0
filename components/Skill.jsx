import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, source }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src={source}
        className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-light h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-primary opacity-100 text-center capitalize">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
