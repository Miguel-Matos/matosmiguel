// import { Poppins } from "next/font/google";
// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  // useEffect(() => {
  //   const introElement = document.getElementById('name');
  //   if (introElement) {
  //     introElement.classList.add(poppins.className);
  //   }
  // })
  return (
    <div className='z-20'>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-zinc-300 p-10'>
            <h1 id='name' className='text-center text-8xl lg:text-9xl mb-10 lg:mb-16'>MIGUEL MATOS</h1>
            <p id='intro' className='text-center  lg:w-1/2 mx-auto pb-16'>Hello! My name is Miguel and I am a frontend developer based in Central Florida.
                With a solid understanding of React, Next.js, Typescript, Tailwind, and more, I am always looking for new ways to push the boundaries of what is possible in the digital space.
            </p>
            <img className='mb-16 rounded-full mx-auto border' src="/me.webp" width={250} height={250} alt="Miguel" id="miguel" />
            <div className="flex gap-10 justify-center items-center mb-5">
              <a className="flex gap-1 items-center" href='https://www.linkedin.com/in/miguelmatosjp/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2xl' /></a>
              <a className="flex gap-1 items-center" href='https://github.com/Miguel-Matos' target="_blank"><FontAwesomeIcon icon={faSquareGithub} size='2xl' /></a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}