import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        scale: [0.5, 1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        rotate: 360,
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute -skew-y-3 skew-x-3 border border-primary rounded-full w-[200px] h-[200px] mt-52 animate-ping" />
      <div className=" absolute -skew-y-2 skew-x-2 border border-[#333333] rounded-3xl w-[300px] h-[300px] mt-52" />
      <div className=" absolute -skew-y-3 skew-x-3 border border-[#333333] rounded-3xl w-[500px] h-[500px] mt-52" />

      <div className="rounded-full border border-primary opacity-20 w-[650px] h-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute -skew-y-6 skew-x-6 border border-[#333333] rounded-3xl w-[800px] h-[800px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
