import React from "react";
import ScrollAnimation from "../components/scrollAnimation";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import LightScrollAnimation from "../components/LightScrollAnimation";

export default function Contact() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className='flex min-h-[300vh] dark:bg-[rgb(0,0,3)] bg-[rgb(115,194,242)]'>
      <div className='w-[30%] sticky top-0 h-screen flex items-center justify-center'>
        {theme === "dark" ? <ScrollAnimation /> : <LightScrollAnimation />}
      </div>
      <div className='w-[60%] m-auto'>
        <div className='h-screen w-full flex items-center'>
          <p className='text-center dark:text-blue-300 text-textHighlight'>
            Every meaningful collaboration starts with a signal. <br /> Scroll
            to witness the landing.
          </p>
        </div>
        {/* Spacer */}
        <section className='h-screen flex items-start justify-center opacity-60 text-textHighlight dark:text-blue-300'>
          <p className='text-center text-base font-semibold'>
            Approaching destination…
          </p>
        </section>
        <div className='h-screen w-full flex items-center justify-start relative z-10'>
          <div className='px-6 py-16 text-textColorDark dark:bg-transparent bg-navBgColor rounded-lg shadow-md overflow-hidden transition duration-300'>
            <motion.h2
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1}}
              className='text-3xl font-bold dark:text-yellow-400 text-textHighlight mb-6'
              style={{}}
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className='mb-4 max-w-2xl dark:text-blue-300 text-accentLight'
            >
              I’m currently open to new opportunities and collaborations. Feel
              free to reach out!
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
              className='flex flex-col sm:flex-row gap-4 mt-6'
            >
              <a
                href='mailto:prerna.rajput.dev@gmail.com'
                className='dark:bg-gray-800 bg-navBgColor dark:text-white text-textColor dark:hover:text-textColor px-6 py-3 rounded-md hover:bg-textHighlight hover:text-white dark:hover:bg-yellow-400 shadow-md transition duration-300 ease-in-out text-center'
              >
                Say Hello! 📧
              </a>
              <a
                href='https://wa.me/919354822230'
                target='_blank'
                rel='noreferrer'
                className='dark:bg-gray-900 bg-accentLight text-textColor dark:hover:text-textColor dark:text-white px-6 py-3 rounded-md hover:bg-blue-300 dark:hover:bg-blue-300 hover:text-black shadow-md transition duration-300 ease-in-out text-center'
              >
                Contact via Text 💬
              </a>
              <a
                href='/assets/Prerna-Rajput-Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='dark:bg-yellow-400 bg-textHighlight hover:bg-[rgb(237,202,96)] dark:hover:bg-blue-300 dark:text-black hover:text-black  px-6 py-3 rounded-md  shadow-md transition duration-300 ease-in-out text-center'
              >
                View Resume 📂
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
