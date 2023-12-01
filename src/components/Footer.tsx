import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {

    animate(
      "a",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return scope;
}

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const menuItems: {title: string; link: string; target: string}[] = [
    {
      title: 'Home',
      link: '/',
      target: '_self'
    },
    {
      title: 'Skills',
      link: '/skills',
      target: '_self'
    },
    {
      title: 'Projects',
      link: '/projects',
      target: '_self'
    },
    {
      title: 'Resume',
      link: '/cv.pdf',
      target: '_blank'
    },
    {
      title: 'Contact',
      link: '/contact',
      target: '_self'
    }
  ]
  const menu = menuItems.map(item => <Link className="hover:text-white" target={item.target} key={item.title} to={item.link}>{item.title}</Link>)
  const mobileMenu = menuItems.map(item => <Link className="hover:text-white" onClick={() => setIsOpen(!isOpen)} target={item.target} key={item.title} to={item.link}>{item.title}</Link>)

  return(
    <>
    <AnimatePresence mode="wait">
      <motion.div
      className="mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <footer className="text-center text-zinc-300">
          <hr className="lg:w-1/2 w-4/5 mx-auto mb-5"/>
          <div className="hidden md:flex gap-5 justify-center text-lg my-10">
            {menu}
          </div>


          <div className="menu mb-5" ref={scope}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="font-bold p-2 bg-white/20 rounded-lg lg:hidden">
              Menu
            </motion.button>
            <div hidden={!isOpen} className="fixed top-0 left-0 text-zinc-300">
              <div className="flex flex-col justify-center items-center gap-10 text-2xl bg-zinc-800 w-screen h-screen">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute bottom-16 rounded-xl border w-4/5 py-5 bg-zinc-600 focus:bg-gray-500 active:bg-gray-500 text-zinc-300 shadow-lg">
                  Close
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="font-bold p-2 lg:hidden">
                  Menu
                </motion.button>
                {mobileMenu}
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  </>

  )
}