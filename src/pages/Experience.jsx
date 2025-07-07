import { motion } from 'framer-motion';
import React from 'react';

export default function Experience () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-blue-400 mb-6"
            >
                Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-10 text-slate-300"
            >
                {/* SDE-I */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-4 rounded-md transition duration-300 hover:bg-slate-800/50 hover:shadow-blue-400/10"
                >
                    <h3 className="text-xl font-semibold text-white">
                        Associate Development Engineer (SDE-I) - AVIZVA
                    </h3>
                    <p className="text-sm text-slate-400">Jan 2024 – Present · Gurugram, India</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Built scalable frontend applications using React.js, Redux, TypeScript.</li>
                        <li>Engineered a custom Rich Text Editor in React, reducing content creation time by 60%.</li>
                        <li>Led the development of a centralized style guide, improving UI/UX consistency and reducing bugs by 15%.</li>
                        <li>Integrated components with RESTful APIs and optimized UI performance.</li>
                        <li>
                            Developed core reusable components and front-end libraries and Style guide for the React-based SDK using Webpack and Bootstrap, leveraging design patterns, performance optimization, and cross-browser compatibility.Decreased UI development time by 15% while adhering to Clean Code principles.
                        </li>
                    </ul>
                </motion.div>

                {/* Trainee */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-4 rounded-md transition duration-300 hover:bg-slate-800/50 hover:shadow-purple-400/10"
                >
                    <h3 className="text-xl font-semibold text-white">
                        Trainee Development Engineer - AVIZVA
                    </h3>
                    <p className="text-sm text-slate-400">Jul 2023 – Jan 2024 · Gurugram, India</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Developed reusable core components using React.js and SCSS.</li>
                        <li>Improved internal component library documentation for faster onboarding.</li>
                        <li>Collaborated with cross-functional teams to deliver features in Agile sprints with 99.9% uptime.</li>
                        <li>
                            Participated in sprint planning, user story discussions, and ensured quality via testing and code reviews.
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
