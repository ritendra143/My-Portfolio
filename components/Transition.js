import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate:{
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}
const Transition = () => {
  return (
    <>
      <motion.div 
      className="fixed right-full top-0 bottom-0 w-screen h-screen z-50 bg-[#144D4F]"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
      className="fixed right-full top-0 bottom-0 w-screen h-screen z-40 bg-[#10ac87]"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
      className="fixed right-full top-0 bottom-0 w-screen h-screen z-30 bg-[#19FAC4]"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
      ></motion.div>
    </>
  );
};

export default Transition;
