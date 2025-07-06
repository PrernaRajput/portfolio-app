import React from 'react';

export default function Experience () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Experience</h2>
            <div className="space-y-8 text-gray-300">
                <div>
                    <h3 className="text-xl font-semibold">Associate Development Engineer (SDE-I) - AVIZVA</h3>
                    <p className="text-sm text-gray-400">Jan 2024 – Present · Gurugram, India</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Built scalable frontend applications using React.js, Redux, TypeScript.</li>
                        <li>Engineered a custom Rich Text Editor in React, reducing content creation time by 60%.</li>
                        <li>Led the development of a centralized style guide, improving UI/UX consistency and reducing bugs by 15%.</li>
                        <li>Integrated components with RESTful APIs and optimized UI performance.</li>
                        <li>Developed core reusable components and front-end libraries and Style guide for the
                            React-based SDK using Webpack and Bootstrap, leveraging design patterns,
                            performance optimization, and cross-browser compatibility for UI development
                            using HTML, CSS, and SCSS, adhering to Clean Code principles, decreasing UI
                            development time by 15% and ensuring consistent design across + projects within
                            the organization's frontend ecosystem; proficient in DOM manipulation and
                            JavaScript object model.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Trainee Development Engineer - AVIZVA</h3>
                    <p className="text-sm text-gray-400">Jul 2023 – Jan 2024 · Gurugram, India</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Developed reusable core components using React.js and SCSS.</li>
                        <li>Improved internal component library documentation for faster onboarding.</li>
                        <li>Collaborated with cross-functional teams to deliver features in Agile sprints with 99.9% uptime.</li>
                        <li>Actively participated in sprint planning sessions, contributing to the definition of user
                            stories and ensuring product quality through rigorous testing and code reviews.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
