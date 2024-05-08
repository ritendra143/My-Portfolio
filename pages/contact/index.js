/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Image from 'next/image';
import { contacts as balls } from "../../public/data/contact";

const Contact = () => {

  return (
    <>
    <div className="hidden lg:flex flex-col items-center w-full justify-center z-1">
      <h1 className="h1 p-8 text-4xl">Let's Chat!</h1>
      <Image src="/contact.png" width={550} height={550} alt="get in touch" ></Image>
      {balls.map((ball) => {
        return <motion.div
        transition={{repeat: Infinity, ease: 'easeIn', duration: 5, repeatType: 'reverse'}}
        animate={{duration: 10, x: Math.random() * 180, y: Math.random()*100}}
        key={ball.id}
        style={{ width: ball.size, height: ball.size, top: ball.top, left: ball.left, right: ball.right, bottom: ball.bottom}}
        className="bubble absolute bg-white/20 p-8 rounded-full flex items-center justify-center text-5xl text-accent"
      > <a href={ball.href}>{ball.icon}</a>
      </motion.div>
      })}
    </div>
    <div className='flex lg:hidden flex-col justify-center items-center z-1 mt-4'> 
    <h1 className="h1 p-8 text-5xl">Let's Chat!</h1>
      <Image src="/contact.png" width={650} height={550} alt="get in touch"></Image>
      <div className='flex flex-wrap flex-row justify-center items-center gap-2'>
        {balls.map((ball) => {
          return <div key={ball.id} className='rounded-full bg-white/10 text-accent text-2xl p-[1.2rem]  bubble'><a href={ball.href}>{ball.icon}</a></div>
        })}
      </div>
    </div>
    </>
  );
};

export default Contact;