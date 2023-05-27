import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/assets/joaoBorges2.jpg"
        className="-mb-20 md:mb-0 mt-44 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
      />
      <div className=" px-10 mt-24 space-y-3">
        <h3 className="text-4xl font-semibold">
          Heres a <span className="underline decoration-primary">little</span>{" "}
          background
        </h3>
        <p className="text-base mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          scelerisque risus nec dignissim blandit. Vestibulum elementum eleifend
          magna pellentesque rhoncus. Morbi ac nisi nisi. Donec non eros sit
          amet mi volutpat scelerisque. Mauris vitae nisl in ante ultrices
          euismod a quis mauris.
        </p>
        <div className="flex justify-center items-center">
          <button className="Hero_Button border-2 border-solid border-light text-light font-semibold">
            resume
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
