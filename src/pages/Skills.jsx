import { motion } from 'framer-motion';

const skills = [
    'React.js', 'Redux', 'JavaScript (ES6)', 'TypeScript',
    'HTML5', 'CSS3', 'SASS', 'SCSS',
    'Jest', 'Webpack', 'Git', 'Bitbucket',
    'Node.js', 'REST APIs', 'Bootstrap', 'Azure',
    'JIRA', 'Jenkins'
];

export default function Skills () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-blue-400 mb-6"
            >
                Skills
            </motion.h2>

            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300"
            >
                {skills.map( ( skill, index ) => (
                    <motion.li
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 px-4 py-2 rounded-md text-sm text-center 
                       hover:bg-blue-900 hover:shadow-blue-500/20 transition duration-300"
                    >
                        {skill}
                    </motion.li>
                ) )}
            </motion.ul>
        </section>
    );
}
