/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center align-middle w-[80%] m-auto text-lg lg:w-[45%]">
        <div className="lg:absolute lg:rotate-90 lg:right-[5rem] top-[16rem]">
          <motion.h1 
          initial={{y:-200}}
          animate={{y:0}}
          transition={{duration: 1.5}}
          className="h1 text-2xl lg:text-5xl text-accent text-center">
            About Me
          </motion.h1>
        </div>
        <motion.div 
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1.5, delay: 1}}
        className="flex flex-col">
          <p className="text-justify py-1 my-auto md:py-[3rem] text-sm md:text-lg">
            I am Ritendra Bhadauriya, A software developer based in India. I am a
            multipotentialite with a passion for the tech world. I am a
            self-driven individual who is always eager to learn and take on new
            challenges. I am also a great communicator and mentor others. I am particularly interested in
            emerging technologies, human psychology, and reformatory ideologies.
            I am also a creative and critical thinker. I love
            to approach problems from different angles and find innovative
            solutions. I am also passionate about music, arts, and fashion.I am always looking for new opportunities to
            learn and grow. I am excited to see what the future holds for me,
            and I am confident that I can make a difference in the world.
          </p>
          <div>
            <div className="text-sm py-2 md:py-6">
              <p className="md:text-xl text-accent">Latest Education</p>
              <p className="md:text-md">Bachelor's of Technology, Information Technology</p>
              <p className="md:text-sm underline">
                GL Bajaj Institute of Technology and Management
              </p>
              <p className="text-sm">2019 - 2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
