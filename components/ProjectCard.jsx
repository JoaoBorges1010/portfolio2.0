import React from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <article
      className="mt-32 flex flex-col z-0 rounded-lg items-center space-y-7
     flex-shrink-0 w-[350px] md:w-[450px] xl:w-[750px] snap-center bg-[#292929] p-10
     hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://user-images.githubusercontent.com/25181517/192603748-3ac17112-3653-4257-80da-a57334b11411.png"
        alt="temp"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Project 1</h4>
        <p className="font-bold text-2xl mt-1">name of project</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Datestart... dateend</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary List</li>
          <li>Sumary List</li>
          <li>Sumary List</li>
          <li>Sumary List</li>
          <li>Sumary List</li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
