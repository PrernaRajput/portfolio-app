import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Button = ( { children, className = '', ...props } ) => (
    <button className={`px-4 py-2 rounded border ${className}`} {...props}>
        {children}
    </button>
);

export default function Home () {
    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">
            <section className="max-w-4xl mx-auto flex flex-col gap-4">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-blue-400"
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-bold"
                >
                    Prerna Rajput.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl text-gray-400"
                >
                    I build accessible, performant front-end applications.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 max-w-2xl"
                >
                    I’m a front-end developer based in Delhi NCR, India. I specialize in
                    building modern React.js applications with great UI/UX. Currently
                    working as an Software Development Engineer at AVIZVA.
                </motion.p>
                <motion.div
                    className="flex gap-4 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <a href="https://github.com/PrernaRajput" target="_blank" rel="noreferrer">
                        <FaGithub className="w-6 h-6 hover:text-blue-400" />
                    </a>
                    <a href="https://linkedin.com/prerna" target="_blank" rel="noreferrer">
                        <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
                    </a>
                    <a
                        href="mailto:prerna.rajput.dev@gmail.com"
                        className="ml-auto"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button variant="outline" className="border-teal-500 text-teal-500  hover:bg-teal-500 hover:text-black  transition-colors duration-300">
                            Get In Touch
                        </Button>
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
