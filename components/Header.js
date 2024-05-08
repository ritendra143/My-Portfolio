import { RiLinkedinFill, RiTwitterFill, RiGithubFill } from "react-icons/ri";
import {motion} from "framer-motion";
const socials = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ritendrasingh-software-developer/",
    icon: <RiLinkedinFill />,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/ritendra143",
    icon: <RiGithubFill />,
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://twitter.com/Ritendra_19",
    icon: <RiTwitterFill />,
  },
];

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4">
      <motion.h1 
      initial={{opacity: 0, x: 100}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 2}}
      className="h1 md:p-y-4 p-x-8">
        {"< "}
        <span className="text-accent">Ritendra Bhadauriya</span>
        {" />"}
      </motion.h1>
      <motion.ul 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay:0.5 }}
      className="flex flex-row justify-center md:justify-evenly items-center gap-[0.5rem] md:gap-[4rem] p-3 md:mr-8">
        {socials.map((item) => (
          <li className="text-accent h1 hover:text-white" key={item.id}>
            <a href={item.link} target="_blank">{item.icon}</a>
          </li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
