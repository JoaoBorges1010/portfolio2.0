import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

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
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/assets/joaoBorges2.jpg"
        className="-mb-20 md:mb-0 mt-32 md:mt-44 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
      />
      <div className=" px-10 mt-10 space-y-3">
        <h3 className="text-2xl font-semibold">
          Heres a{" "}
          <span className="underline decoration-primary underline-offset-2">
            little
          </span>{" "}
          background
        </h3>
        <p className="text-base mt-4 text-sm text-gray-500">
          I used to be a cook until I decided to change my Life and become a Web
          developer. After 9 intense weeks at
          <a
            href="https://www.lewagon.com/"
            className=" font-bold underline decoration-primary/50 underline-offset-4"
            target="_blank"
          >
            <Image
              src="https://www.lewagon.com/assets/v4/logo-lewagon-9c19fb39a748cd3b1f49059ce0dc6c0dfc4cc2447d5a9a3e01bd2d5a214faf3c.svg"
              width={105}
              height={105}
              alt=""
              className="hover:bg-light transition-all ease-in-out duration-300 pr-1 mx-2 rounded-md md:mr-2 md:ml-0 inline whitespace-nowrap"
            />
          </a>
          bootcamp I am a coder. It has been a dream for a long time. Very
          enthusiast and highly motivated to keep on going and learn everything
          that I can. The sky is the Limit.
        </p>
        <div className="flex justify-center items-center">
          <Link
            href="/assets/JoaoBorgesCV.pdf"
            target={"_blank"}
            download={true}
          >
            <button className="Hero_Button text-sm border-2 border-solid border-light text-light font-semibold flex justify-evenly gap-2  items-center">
              resume
              <FiDownload size={20} />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
