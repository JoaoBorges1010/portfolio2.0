import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const ProjectCard = ({ title, description, skills, link, details, image }) => {
  return (
    <div
      className="mt-32 flex flex-col rounded-lg items-center space-y-7
          flex-shrink-0 w-[350px] md:w-[450px] xl:w-[700px] snap-center bg-[#292929]
          hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
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
        className="w-28 h-28 mt-5 rounded-full md:rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={image}
        alt="temp"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light text-light">{title}</h4>
        <div className="flex space-x-2 my-2">
          {skills.map((skill) => {
            return (
              <img
                className="w-8 h-8 rounded-full"
                key={skill}
                src={skill}
                alt="skill"
              />
            );
          })}
        </div>
        <p className="uppercase text-xl font-bold py-5 text-light ">
          {description}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-sm capitalize">
          {details.map((detail) => {
            return <li key={detail}>{detail}</li>;
          })}
        </ul>
      </div>
      <motion.div whileHover={{ y: -2, scale: 1.5 }} whileTap={{ scale: 0.9 }}>
        <SocialIcon
          url={link}
          target="blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </div>
  );
};
export default ProjectCard;
