import {motion} from "framer-motion";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import StarParticles from "../components/StarParticles";
import {useSelector} from "react-redux";
import CloudParticles from "../components/CloudParticles";

const Button = ({children, className = "", ...props}) => (
  <button
    className={`px-4 py-2 rounded border font-medium transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function Home() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <>
      {theme === "dark" ? <StarParticles /> : <CloudParticles />}
      <main className='min-h-screen bg-gradientRadial text-textColor dark:text-textColorDark px-6 py-20'>
        <section className='mx-auto flex flex-col gap-4'>
          <motion.p
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1}}
            className='text-textColor dark:text-textColorDark'
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className='text-5xl font-bold dark:text-accentDark text-accentLight'
          >
            Prerna Rajput.
          </motion.h1>

          <motion.h2
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className='text-3xl text-textHighlight dark:text-textHighlightDark'
          >
            I build accessible, performant front-end applications.
          </motion.h2>

          <motion.p
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            className='text-textColor dark:text-textColorDark max-w-2xl'
          >
            I’m a front-end developer based in Delhi NCR, India. I specialize in
            building modern React.js applications with great UI/UX. Currently
            working as a Software Development Engineer at AVIZVA.
          </motion.p>

          <motion.div
            className='flex items-center gap-4 mt-6'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5}}
          >
            <a
              href='https://github.com/PrernaRajput'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='w-6 h-6 dark:text-accentDark text-accentLight hover:text-textHighlight dark:hover:text-textHighlightDark transition' />
            </a>
            <a
              href='https://linkedin.com/prerna'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='w-6 h-6 dark:text-accentDark text-accentLight hover:text-textHighlight dark:hover:text-textHighlightDark transition' />
            </a>

            <a
              href='mailto:prerna.rajput.dev@gmail.com'
              className='ml-auto'
              target='_blank'
              rel='noreferrer'
            >
              <Button className='border-textColor dark:bg-accentDark bg-accentLight dark:border-textColor text-bodyBgColor dark:text-textColorDark hover:bg-textHighlight dark:hover:bg-textHighlightDark dark:hover:text-bodyBgColorDark hover:text-bodyBgColor'>
                Get In Touch
              </Button>
            </a>
          </motion.div>
        </section>
      </main>
    </>
  );
}
