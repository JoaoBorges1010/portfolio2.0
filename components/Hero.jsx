import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, my name is João Borges", "<I Love to Code />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 1.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        src="/assets/joaoBorges.jpg"
        alt="JoãoBorges"
        width={300}
        height={300}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm text-gray-500 pb-2 tracking-[15px]">
          FullStack developer
        </h2>
        <h1 className=" text-light text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#B70404" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="Hero_Button">About</button>
          </Link>
          <Link href="#skills">
            <button className="Hero_Button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="Hero_Button">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="Hero_Button">Contact me</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
