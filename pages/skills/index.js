import { motion } from "framer-motion";
import {useState} from 'react';
import skills from '../../public/data/skills';

const Services = () => {

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
    <h1 className="flex items-center justify-center z-1 h1 text-accent md:absolute md:rotate-90 h1 text-2xl md:text-5xl md:right-[2rem] md:top-[10rem]">Skills</h1>
    <div className="flex lg:flex-row flex-col w-[95%]  md:w-[70%] m-auto z-1">
      <motion.div
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       className="skillBubble m-auto flex h-[30rem] md:h-[38rem] flex-wrap items-center justify-center overflow-hidden relative">
        {skills.map((skill) => {
          return (
            <motion.div
              initial={{ translateY: "0%"}}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
              animate={!isHovered ? { translateY: "-380%" } : {}}
              key={skill.id}
              className="p-4 flex flex-col items-center justify-center"
            >
              <div className="bg-white/10 p-4 lg:p-10 bubble rounded-full w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <img src={skill.src} alt={skill.label} width={'100%'} height={'100%'}/>
              </div>
              <p className="text-sm">{skill.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
    </>
  );
};

export default Services;
