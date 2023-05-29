import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const skill = [
  {
    id: 1,
    name: "react",
    source:
      "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
  },
  {
    id: 2,
    name: "javascript",
    source:
      "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
  },
  {
    id: 3,
    name: "html",
    source:
      "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
  },
  {
    id: 4,
    name: "css",
    source:
      "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
  },
  {
    id: 5,
    name: "tailwindcss",
    source:
      "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
  },
  {
    id: 6,
    name: "ruby on rails",
    source:
      "https://user-images.githubusercontent.com/25181517/192603748-3ac17112-3653-4257-80da-a57334b11411.png",
  },
  {
    id: 7,
    name: "ruby",
    source:
      "https://user-images.githubusercontent.com/25181517/192603745-7d34df9e-7756-4756-a539-6a61badf7a80.png",
  },
  {
    id: 8,
    name: "git",
    source:
      "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
  },
  {
    id: 9,
    name: "github",
    source:
      "https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png",
  },
  {
    id: 10,
    name: "redux",
    source:
      "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png",
  },
  {
    id: 11,
    name: "bootstrap",
    source:
      "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
  },
  {
    id: 12,
    name: "Nextjs",
    source:
      "https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png",
  },
];

const Skills = () => {
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:py-10 min-h-screen justify-center xl:space-y-10 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5 pt-24 md:grid-cols-4">
        {skill.map(({ id, name, source }) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: id / 4,
                  duration: 1.2,
                },
              }}
              viewport={{ once: true }}
              key={id}
            >
              <Skill source={source} name={name} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
