import { motion } from 'framer-motion';

export default function Contact () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 text-coolGray">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-ashGray mb-6"
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
                {/* Email Button */}
                <a
                    href="mailto:prerna.rajput.dev@gmail.com"
                    className="bg-spaceCadet text-antiFlashWhite px-6 py-3 rounded-md 
                     hover:bg-ashGray hover:text-gunmetal shadow-md 
                     hover:shadow-ashGray/30 transition duration-300 ease-in-out text-center"
                >
                    Say Hello!
                </a>

                {/* WhatsApp Text Button */}
                <a
                    href="https://wa.me/919354822230"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gunmetal text-antiFlashWhite px-6 py-3 rounded-md 
                     hover:bg-coolGray hover:text-black shadow-md 
                     hover:shadow-coolGray/30 transition duration-300 ease-in-out text-center"
                >
                    Contact via Text
                </a>

                {/* View Résumé Button */}
                <a
                    href="/assets/Prerna-Rajput-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ashGray text-gunmetal px-6 py-3 rounded-md 
                     hover:bg-coolGray hover:text-antiFlashWhite shadow-md 
                     hover:shadow-ashGray/30 transition duration-300 ease-in-out text-center"
                >
                    View Resume
                </a>
            </motion.div>
        </section>
    );
}
