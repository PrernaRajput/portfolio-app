import { motion } from 'framer-motion';

export default function Contact () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-blue-400 mb-6"
            >
                Contact
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 max-w-2xl"
            >
                I’m currently open to new opportunities and collaborations. Feel free to reach out!
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mt-6"
            >
                <a
                    href="mailto:prerna.rajput.dev@gmail.com"
                    className="bg-blue-400 text-black px-6 py-3 rounded-md 
                     hover:bg-teal-500 hover:text-white shadow-md 
                     hover:shadow-blue-400/40 transition duration-300 ease-in-out text-center"
                >
                    Say Hello!
                </a>

                <a
                    href="https://wa.me/919354822230"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-300 text-black px-6 py-3 rounded-md 
                     hover:bg-teal-600 hover:text-white shadow-md 
                     hover:shadow-green-400/40 transition duration-300 ease-in-out"
                >
                    Contact via Text
                </a>

                <a
                    href="/assets/Prerna-Rajput-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-200 text-black px-6 py-3 rounded-md 
                    hover:bg-teal-700 hover:text-white shadow-md 
                    hover:shadow-green-400/40 transition duration-300 ease-in-out"
                >
                    View Résumé
                </a>

            </motion.div>
        </section>
    );
}
