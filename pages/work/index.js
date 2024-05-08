import Image from "next/image";
import { RiGithubLine, RiLinksFill } from "react-icons/ri";
import { motion } from "framer-motion";
import {organizations, projects} from '../../public/data/work';

const Work = () => {

  return (
    <>
      <div className="flex flex-col w-full md:w-[85%] m-auto">
        <div className="flex flex-row justify-center">
          {organizations.map((org, index) => {
            return (
              <motion.div
                animate={{translateY: ["-200%", "0%"]}}
                transition={{ duration: 0.8, delay: (index/10)+0.2, ease: 'easeIn' }}
                key={org.id}
                className="flex flex-row gap-2 md:p-2 m-1 bg-white/10 rounded-xl width-[50%]"
              >
                <div className="flex items-center">
                  <Image
                    src={org.logo}
                    width={80}
                    height={80}
                    className="rounded-full hidden md:flex"
                    alt="organization logo"
                  />
                </div>
                <div className="p-2 text-sm">
                  <p className="text-sm">{org.name}</p>
                  <p className="text-sm">{org.role}</p>
                  <p className="text-sm">{org.duration}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="w-full md:w-[80%] m-auto md:mt-8 flex flex-row overflow-x-scroll snap-x snap-mandatory scrollbar-track-white/20 scrollbar-thumb-accent scrollbar-rounded-large scrollbar-thin">
          {projects.map((project) => {
            return (
              <div
                className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center flex-shrink-0 snap-center md:gap-4 p-4 lg:mt-4 text-center"
                key={project.id}
              >
                <motion.img
                  initial={{ translateY: -200, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={project.src}
                  width={450}
                  height={450}
                  alt="project image"
                  className="sm:animate-none"
                />
                <div className="w-full lg:w-[40%] flex flex-col gap-2 items-center">
                  <h1 className="h1 text-accent">{project.name}</h1>
                  <div className="flex flex-row justify-evenly w-full">
                    <a href={project?.github} className="h1 text-accent" target="_blank">
                      <RiGithubLine />
                    </a>
                    <a href={project?.link} className="h1 text-accent" target="_blank">
                      <RiLinksFill />
                    </a>
                  </div>
                  <div className="text-justify text-sm">
                    {project?.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
