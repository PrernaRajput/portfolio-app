import React from "react";
import ScrollAnimation from "../components/scrollAnimation";
import {motion} from "framer-motion";

export default function Contact() {
  return (
    <div
      style={{backgroundColor: "rgb(0,0,3)"}}
      className='flex min-h-[300vh] bg-[rgb(0,0,3)]'
    >
      <div className='w-[30%] sticky top-0 h-screen flex items-center justify-center'>
        <ScrollAnimation />
      </div>
      <div className='w-[60%] m-auto'>
        <div
          className='h-screen w-full flex items-center'
          style={{backgroundColor: "rgb(0,0,3)"}}
        >
          <p
            className='text-center text-blue-300'
            style={{color: "rgb(133 196 255 / var(--tw-text-opacity, 1))"}}
          >
            Every meaningful collaboration starts with a signal. <br /> Scroll
            to witness the landing.
          </p>
        </div>
        {/* Spacer */}
        <section className='h-screen flex items-start justify-center opacity-60'>
          <p>Approaching destination…</p>
        </section>
        <div
          className='h-screen w-full flex items-center justify-start relative z-10'
          style={{backgroundColor: "rgb(0,0,3)"}}
        >
          <div className='px-6 py-16 text-textColorDark bg-transparent rounded-lg shadow-md overflow-hidden transition duration-300'>
            <motion.h2
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1}}
              className='text-3xl font-bold text-yellow-400 mb-6'
              style={{color: "rgb(255 195 0 / var(--tw-text-opacity, 1))"}}
            >
              Contact
            </motion.h2>

            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className='mb-4 max-w-2xl text-blue-300'
              style={{color: "rgb(133 196 255 / var(--tw-text-opacity, 1))"}}
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
                className='bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-yellow-400 hover:text-black shadow-md transition duration-300 ease-in-out text-center'
              >
                Say Hello! 📧
              </a>

              <a
                href='https://wa.me/919354822230'
                target='_blank'
                rel='noreferrer'
                className='bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-blue-300 hover:text-black shadow-md transition duration-300 ease-in-out text-center'
              >
                Contact via Text 💬
              </a>

              <a
                href='/assets/Prerna-Rajput-Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white shadow-md transition duration-300 ease-in-out text-center'
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
