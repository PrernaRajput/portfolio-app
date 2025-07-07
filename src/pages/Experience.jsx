import { motion } from 'framer-motion';
import React from 'react';

export default function Experience () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-ashGray mb-6"
            >
                Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-10 text-antiFlashWhite"
            >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-4 rounded-md border border-gunmetal transition duration-300 
                     hover:bg-spaceCadet hover:shadow-lg hover:shadow-coolGray/20"
                >
                    <h3 className="text-xl font-semibold text-ashGray">
                        Associate Development Engineer (SDE-I) — AVIZVA
                    </h3>
                    <p className="text-sm text-coolGray">Jan 2024 – Present · Gurugram, India</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Built scalable frontend applications using React.js, Redux, and TypeScript.</li>
                        <li>Engineered a custom Rich Text Editor in React, reducing content creation time by 60%.</li>
                        <li>Led the development of a centralized style guide to improve consistency and reduce bugs.</li>
                        <li>Integrated UI components with REST APIs and optimized performance across modules.</li>
                        <li>
                            Developed reusable UI libraries and a React-based SDK with Webpack, Bootstrap, and SCSS,
                            decreasing development time by 15% and enhancing design system cohesion.
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-4 rounded-md border border-gunmetal transition duration-300 
                     hover:bg-spaceCadet hover:shadow-lg hover:shadow-coolGray/20"
                >
                    <h3 className="text-xl font-semibold text-ashGray">
                        Trainee Development Engineer — AVIZVA
                    </h3>
                    <p className="text-sm text-coolGray">Jul 2023 – Jan 2024 · Gurugram, India</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Built reusable React components and styled them with SCSS + utility classes.</li>
                        <li>Enhanced developer onboarding by improving internal documentation.</li>
                        <li>Delivered features on time with 99.9% uptime while collaborating in agile sprints.</li>
                        <li>Led QA-ready code reviews and test coverage for team-owned modules.</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
