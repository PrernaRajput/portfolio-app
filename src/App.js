
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { motion } from 'framer-motion';
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiArrowRight,
    FiCode,
    FiLayers,
    FiTrendingUp,
    FiZap,
    FiCheckCircle,
    FiPhone,
    FiMessageCircle,
} from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ThemeToggle from './components/ThemeToggle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const contactItems = [
    {
        icon: <FiMail />,
        label: 'Email',
        value: 'prerna.rajput.dev@gmail.com',
        href: 'mailto:prerna.rajput.dev@gmail.com',
    },
    {
        icon: <FiGithub />,
        label: 'GitHub',
        value: 'github.com/PrernaRajput',
        href: 'https://github.com/PrernaRajput',
    },
    {
        icon: <FiLinkedin />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/prerna-rajput-dev',
        href: 'https://linkedin.com/in/prerna-rajput-dev',
    },
    {
        icon: <FiMessageCircle />,
        label: 'WhatsApp',
        value: 'Text Me',
        href: 'https://wa.me/919354822230',
    },
    {
        icon: <FiPhone />,
        label: 'Phone',
        value: '+91 9354822230',
        href: 'tel:+919354822230',
    },
];

const caseStudies = [
    {
        id: 'rich-text-editor',
        title: 'Custom Rich Text Editor',
        category: 'Enterprise Frontend Engineering',
        metrics: {
            primary: 'Improved content creation efficiency by 60%',
            secondary: 'Improved editor satisfaction scores by 25%',
        },
        shortDescription:
            'Built a production-grade Rich Text Editor for enterprise email templating workflows with scalable formatting architecture and optimized rendering performance.',
        overview:
            'Designed and developed a custom Rich Text Editor in React to streamline enterprise email template creation workflows while improving editor flexibility, maintainability, and usability.',
        challenges: [
            'Managing complex editor state synchronization',
            'Handling reusable formatting modules and nested content structures',
            'Preventing unnecessary re-renders during large document editing',
            'Maintaining accessibility and keyboard interactions',
        ],
        contributions: [
            'Designed reusable editor architecture using React component composition',
            'Implemented formatting toolbar and modular content blocks',
            'Optimized rendering performance for large content trees',
            'Improved testing reliability and template preview workflows',
        ],
        technicalDecisions: [
            'Used controlled editor state management for consistency',
            'Implemented reusable formatting abstractions to simplify future feature additions',
            'Optimized rendering paths to reduce UI lag during content editing',
        ],
        impact: [
            'Reduced content creation time by 60%',
            'Improved editor satisfaction scores by 25%',
            'Improved maintainability of email template workflows',
        ],
        stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'Performance Optimization'],
        highlights: [
            'Reusable formatting architecture',
            'Enterprise email templating workflows',
            'Optimized rendering and state synchronization',
        ],
    },

    {
        id: 'scss-layout-library',
        title: 'Custom SCSS Layout Utility Library',
        category: 'Design Systems & UI Architecture',
        metrics: {
            primary: 'Reduced layout-related code by 30%',
            secondary: 'Improved page load times by 15%',
        },
        shortDescription:
            'Created a scalable utility-driven layout system to eliminate repetitive page-level CSS and improve UI consistency across enterprise applications.',
        overview:
            'Developed a reusable SCSS utility library capable of auto-aligning widgets through markup-driven attributes, significantly reducing duplicated layout code.',
        challenges: [
            'Maintaining layout flexibility across multiple enterprise applications',
            'Reducing page-specific styling duplication',
            'Ensuring responsive consistency across widget layouts',
            'Optimizing CSS delivery performance',
        ],
        contributions: [
            'Built utility-driven responsive layout abstractions',
            'Implemented markup-based layout configuration',
            'Integrated lazy loading for non-critical styles',
            'Improved reusable design patterns across projects',
        ],
        technicalDecisions: [
            'Used utility-first SCSS abstractions instead of page-level styling',
            'Implemented deferred loading for performance optimization',
            'Created scalable responsive breakpoint handling',
        ],
        impact: [
            'Reduced layout-related CSS by 30%',
            'Reduced development time by 20%',
            'Improved above-the-fold render performance by 28%',
            'Integrated into 3+ internal enterprise projects',
        ],
        stack: ['SCSS', 'Responsive Design', 'Performance Optimization', 'Design Systems'],
        highlights: [
            'Markup-driven layout system',
            'Reusable responsive utilities',
            'Lazy-loaded CSS architecture',
        ],
    },

    {
        id: 'rbac-routing',
        title: 'Access-Based Fallback Routing System',
        category: 'Frontend Architecture',
        metrics: {
            primary: 'Reduced navigation-related support tickets by 30%',
            secondary: 'Managed access handling across 25+ routes',
        },
        shortDescription:
            'Implemented an RBAC-integrated routing architecture to centralize permission handling and enforce secure enterprise navigation flows.',
        overview:
            'Developed a role-aware fallback routing system integrated with RBAC logic to manage enterprise route access and dynamic redirects.',
        challenges: [
            'Managing route-level access permissions at scale',
            'Handling unauthorized navigation states',
            'Reducing duplicated authorization logic across applications',
            'Ensuring predictable redirect behavior',
        ],
        contributions: [
            'Designed centralized route resolution architecture',
            'Integrated RBAC access checks with React Router',
            'Implemented dynamic fallback navigation handling',
            'Improved maintainability of protected route flows',
        ],
        technicalDecisions: [
            'Used centralized access resolution instead of scattered route guards',
            'Implemented reusable navigation middleware patterns',
            'Optimized routing flow for scalability and maintainability',
        ],
        impact: [
            'Reduced support tickets related to navigation issues by 30%',
            'Improved reliability of protected enterprise workflows',
            'Reduced duplicated permission logic across modules',
        ],
        stack: ['React Router', 'RBAC', 'Redux', 'Enterprise Architecture'],
        highlights: [
            'Centralized authorization handling',
            'Scalable protected routing system',
            'Improved enterprise navigation reliability',
        ],
    },

    {
        id: 'micro-frontend-architecture',
        title: 'Micro Frontend Architecture Implementation',
        category: 'Scalable Frontend Systems',
        metrics: {
            primary: 'Enabled independent deployment of UI modules',
            secondary: 'Improved parallel feature team development',
        },
        shortDescription:
            'Implemented Micro Frontend architecture to decouple enterprise feature teams and improve scalability of frontend delivery workflows.',
        overview:
            'Worked on modular frontend architecture enabling independently deployable UI modules while maintaining consistent shared design systems.',
        challenges: [
            'Maintaining UI consistency across independently deployed modules',
            'Managing shared dependencies and versioning',
            'Coordinating routing between micro applications',
            'Reducing deployment bottlenecks between teams',
        ],
        contributions: [
            'Implemented modular frontend boundaries',
            'Improved shared component reuse strategy',
            'Contributed to scalable frontend integration workflows',
            'Reduced coupling between feature teams',
        ],
        technicalDecisions: [
            'Used modular architecture for independent deployments',
            'Separated feature ownership boundaries for scalability',
            'Created reusable integration patterns between modules',
        ],
        impact: [
            'Improved scalability of frontend delivery workflows',
            'Enabled parallel development across teams',
            'Reduced deployment dependencies between modules',
        ],
        stack: ['React', 'Micro Frontends', 'Webpack', 'Shared Component Libraries'],
        highlights: [
            'Independent deployments',
            'Shared UI architecture',
            'Scalable enterprise frontend patterns',
        ],
    },

    {
        id: 'storybook-component-library',
        title: 'Reusable Component Library with Storybook',
        category: 'Design Systems',
        metrics: {
            primary: 'Reduced UI development time by 45%',
            secondary: 'Improved onboarding efficiency by 20%',
        },
        shortDescription:
            'Built and maintained reusable React component libraries documented through Storybook to improve consistency and developer velocity.',
        overview:
            'Developed reusable frontend components and standardized UI documentation workflows for enterprise applications.',
        challenges: [
            'Maintaining design consistency across multiple projects',
            'Improving frontend onboarding workflows',
            'Reducing duplicated UI implementation effort',
            'Documenting reusable component behaviors clearly',
        ],
        contributions: [
            'Built reusable component abstractions',
            'Maintained Storybook documentation',
            'Improved collaboration between frontend and UX teams',
            'Standardized reusable UI patterns',
        ],
        technicalDecisions: [
            'Used component-driven architecture for scalability',
            'Created isolated component documentation workflows',
            'Focused on reusable UI composition patterns',
        ],
        impact: [
            'Reduced frontend development time by 45%',
            'Accelerated onboarding by 20%',
            'Improved UI consistency across projects',
        ],
        stack: ['React', 'Storybook', 'SCSS', 'Reusable Components'],
        highlights: [
            'Reusable UI system',
            'Scalable component documentation',
            'Improved cross-team collaboration',
        ],
    },

    {
        id: 'dynamic-navigation-system',
        title: 'Dynamic Enterprise Navigation System',
        category: 'Frontend Infrastructure',
        metrics: {
            primary: 'Improved maintainability of enterprise navigation flows',
            secondary: 'Centralized sidebar and route resolution logic',
        },
        shortDescription:
            'Built a scalable navigation infrastructure handling dynamic sidebars, route-based updates, and centralized navigation state management.',
        overview:
            'Worked on a complex enterprise navigation system using React, Redux, and resolver-based architecture to dynamically manage sidebar and route updates.',
        challenges: [
            'Handling route-aware sidebar updates dynamically',
            'Managing shared navigation state across modules',
            'Preventing inconsistent navigation rendering',
            'Supporting scalable enterprise routing flows',
        ],
        contributions: [
            'Developed callback-based sidebar resolution logic',
            'Improved centralized navigation state management',
            'Implemented dynamic route-aware navigation updates',
            'Integrated event-driven sidebar synchronization',
        ],
        technicalDecisions: [
            'Used resolver-driven architecture for navigation flexibility',
            'Implemented centralized Redux-driven navigation state',
            'Designed scalable sidebar update workflows',
        ],
        impact: [
            'Improved maintainability of navigation workflows',
            'Reduced duplicated sidebar handling logic',
            'Improved consistency across route transitions',
        ],
        stack: ['React', 'Redux', 'Routing', 'Event-Driven Architecture'],
        highlights: [
            'Dynamic sidebar synchronization',
            'Resolver-driven route handling',
            'Scalable navigation architecture',
        ],
    },

    {
        id: 'advanced-overlay-system',
        title: 'Advanced Overlay & Popover Management System',
        category: 'UI Engineering',
        metrics: {
            primary: 'Improved consistency of overlay positioning and interactions',
            secondary: 'Migrated legacy positioning implementation',
        },
        shortDescription:
            'Refactored overlay and popover infrastructure using @popperjs/core to improve maintainability, rendering consistency, and positioning behavior.',
        overview:
            'Worked on overlay management systems responsible for dropdowns, tooltips, popovers, and dynamic floating UI interactions.',
        challenges: [
            'Managing overlay positioning across responsive layouts',
            'Handling focus restoration and accessibility interactions',
            'Preventing overlay rendering inconsistencies',
            'Supporting scalable overlay behaviors across components',
        ],
        contributions: [
            'Migrated legacy popper implementation to modern architecture',
            'Improved overlay rendering lifecycle handling',
            'Implemented scalable focus and blur interaction logic',
            'Optimized positioning consistency across devices',
        ],
        technicalDecisions: [
            'Migrated from react-popper to @popperjs/core for better control',
            'Centralized overlay interaction handling',
            'Improved focus restoration for accessibility support',
        ],
        impact: [
            'Improved maintainability of floating UI infrastructure',
            'Reduced overlay positioning inconsistencies',
            'Improved accessibility and keyboard interactions',
        ],
        stack: ['React', '@popperjs/core', 'Accessibility', 'UI Infrastructure'],
        highlights: [
            'Overlay rendering optimization',
            'Accessible focus management',
            'Modernized popover architecture',
        ],
    },

    {
        id: 'react-native-cordova-solutions',
        title: 'React Native & Cordova Mobile Solutions',
        category: 'Cross-Platform Development',
        metrics: {
            primary: 'Built optimized cross-platform mobile experiences',
            secondary: 'Integrated advanced APIs and native functionalities',
        },
        shortDescription:
            'Developed mobile application solutions using React Native and Cordova with focus on performance, responsive UX, and native API integration.',
        overview:
            'Worked on cross-platform mobile application development integrating frontend experiences with native capabilities and optimized API workflows.',
        challenges: [
            'Maintaining performance across mobile devices',
            'Handling native functionality integrations',
            'Ensuring responsive cross-platform behavior',
            'Managing API-driven mobile experiences',
        ],
        contributions: [
            'Developed mobile UI workflows using React Native and Cordova',
            'Integrated native functionality and API communication layers',
            'Optimized mobile rendering and responsiveness',
            'Improved cross-platform user experience consistency',
        ],
        technicalDecisions: [
            'Used cross-platform architecture for shared feature delivery',
            'Optimized API interactions for mobile performance',
            'Focused on responsive and native-like interactions',
        ],
        impact: [
            'Improved mobile user experience consistency',
            'Enabled faster delivery across mobile platforms',
            'Improved performance of mobile workflows',
        ],
        stack: ['React Native', 'Cordova', 'REST APIs', 'Mobile UI'],
        highlights: [
            'Cross-platform architecture',
            'Native integrations',
            'Optimized mobile workflows',
        ],
    },
];

const featuredProjects = [
    {
        title: 'Custom Rich Text Editor',
        metrics: 'Improved content creation efficiency by 60%',
        description:
            'Engineered a production-grade React Rich Text Editor used for email templating workflows with reusable formatting modules, scalable state handling, and testing improvements.',
        stack: ['React', 'Redux', 'TypeScript', 'Performance'],
        highlights: [
            'Improved editor satisfaction scores by 25%',
            'Built reusable formatting architecture',
            'Optimized rendering and state synchronization',
        ],
        icon: <FiGithub />,
        href:'https://github.com/PrernaRajput/blog-post-hr'
        
    },
    {
        title: 'Access-Based Fallback Routing System',
        metrics: 'Reduced navigation-related support tickets by 30%',
        description:
            'Implemented RBAC-integrated routing architecture for enterprise React applications with centralized access resolution and protected route handling.',
        stack: ['React Router', 'RBAC', 'Redux', 'Enterprise Architecture'],
        highlights: [
            'Managed 25+ protected enterprise routes',
            'Improved navigation reliability',
            'Reduced duplicated authorization logic',
        ],
        icon: <FiGithub />,
        href:'https://github.com/PrernaRajput'
        
    },
    {
        title: 'SCSS Layout Utility Library',
        metrics: 'Reduced layout-related code by 30%',
        description:
            'Built scalable utility-driven layout architecture integrated across multiple internal enterprise products.',
        stack: ['SCSS', 'Responsive Design', 'Performance', 'Design Systems'],
        highlights: [
            'Integrated into 3+ enterprise applications',
            'Improved page load time by 15%',
            'Reduced UI inconsistencies and layout bugs',
        ],
        icon: <FiGithub />,
        href:'https://github.com/PrernaRajput/runtime_css_engine'
    }
];

const highlights = [
    {
        icon: <FiZap />,
        title: 'Performance Engineering',
        description:
            'Lazy loading, rendering optimization, scalable state management, bundle optimization, and enterprise-grade frontend performance.',
    },
    {
        icon: <FiLayers />,
        title: 'Scalable Architecture',
        description:
            'Reusable component systems, Micro Frontends, RBAC routing, Storybook-driven UI architecture, and maintainable frontend patterns.',
    },
    {
        icon: <FiTrendingUp />,
        title: 'Enterprise Product Experience',
        description:
            'Built scalable React applications used in production environments with accessibility, performance, and maintainability focus.',
    },
    {
        icon: <FiCode />,
        title: 'Modern Frontend Stack',
        description:
            'React.js, Redux, TypeScript, React Native, Cordova, Webpack, CI/CD, Jenkins, Tailwind CSS, and REST integrations.',
    },
];

const skills = {
    Frontend: [
        'React.js',
        'Redux',
        'TypeScript',
        'JavaScript ES6+',
        'Tailwind CSS',
        'SCSS',
        'HTML5',
        'CSS3',
    ],
    Architecture: [
        'Micro Frontends',
        'RBAC',
        'Reusable Component Systems',
        'Responsive Design',
        'Accessibility (WCAG)',
        'Storybook',
    ],
    Tooling: [
        'Webpack',
        'Jenkins',
        'CI/CD',
        'Git',
        'Jest',
        'REST APIs',
        'Azure',
        'JIRA',
    ],
};

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="section-heading">
            <span>{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

function App() {
    const themeMode = useSelector((state) => state.theme.mode);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', themeMode === 'dark');
    }, [themeMode]);

    return (
        <div className="app-shell">
            <header className="navbar">
                <div className="brand">Prerna Rajput</div>

                <div className="nav-actions">
                    <nav>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <ThemeToggle />
                </div>
            </header>

            <main>
                <section className="hero-section">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <p className="eyebrow">Frontend Engineer • React Specialist • 3 Years Experience</p>

                        <h1>
                            Building scalable enterprise React applications with performance-focused architecture,
                            accessibility-first design systems, and production-grade frontend engineering.
                        </h1>

                        <p className="hero-description">
                            Software Development Engineer at AVIZVA specializing in React.js, TypeScript,
                            reusable component systems, Micro Frontends, RBAC architecture, and enterprise UI engineering.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="primary-btn">
                                View Projects <FiArrowRight />
                            </a>

                            <a
                                href="mailto:prerna.rajput.dev@gmail.com"
                                className="secondary-btn"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div>
                                <strong>3+</strong>
                                <span>Years Experience</span>
                            </div>

                            <div>
                                <strong>10+</strong>
                                <span>Enterprise Features Delivered</span>
                            </div>

                            <div>
                                <strong>25+</strong>
                                <span>Protected Routes Managed</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="section" id="projects">
                    <SectionTitle
                        eyebrow="Featured Work"
                        title="Engineering-driven frontend projects"
                        description="Real-world frontend systems focused on scalability, maintainability, accessibility, and performance."
                    />

                    <div className="projects-grid">
                        {featuredProjects.map((project) => (
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="project-card"
                                key={project.title}
                            >
                                <p className="project-metric">{project.metrics}</p>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="stack-list">
                                    {project.stack.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>

                                <ul>
                                    {project.highlights.map((highlight) => (
                                        <li key={highlight}>
                                            <FiCheckCircle />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>


                                <motion.a
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                    key={project.title}
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-icon"
                                >

                                    <div className="contact-icon">
                                        {project.icon}
                                    </div>

                                </motion.a>

                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="section" id="case-studies">
                    <SectionTitle
                        eyebrow="Case Studies"
                        title="Deep dives into frontend architecture and engineering systems"
                        description="A closer look at scalable frontend solutions, performance optimizations, reusable systems, and enterprise engineering decisions."
                    />

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={32}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.1,
                            },
                            1024: {
                                slidesPerView: 1.3,
                            },
                            1440: {
                                slidesPerView: 1.5,
                            },
                        }}
                        className="case-study-swiper"
                    >
                        {caseStudies.map((study) => (
                            <SwiperSlide key={study.id}>
                                <motion.div
                                    className="case-study-card"
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="case-study-header">
                                        <div>
                                            <span className="case-study-category">
                                                {study.category}
                                            </span>

                                            <h3>{study.title}</h3>
                                        </div>

                                        <div className="case-study-metrics">
                                            <strong>{study.metrics.primary}</strong>
                                            <span>{study.metrics.secondary}</span>
                                        </div>
                                    </div>

                                    <p className="case-study-description">
                                        {study.shortDescription}
                                    </p>

                                    <div className="case-study-section">
                                        <h4>Overview</h4>
                                        <p>{study.overview}</p>
                                    </div>

                                    <div className="case-study-section">
                                        <h4>Key Challenges</h4>

                                        <ul>
                                            {study.challenges.map((challenge) => (
                                                <li key={challenge}>
                                                    <FiCheckCircle />
                                                    {challenge}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="case-study-section">
                                        <h4>Technical Contributions</h4>

                                        <ul>
                                            {study.contributions.map((contribution) => (
                                                <li key={contribution}>
                                                    <FiCheckCircle />
                                                    {contribution}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="case-study-section">
                                        <h4>Impact</h4>

                                        <ul>
                                            {study.impact.map((item) => (
                                                <li key={item}>
                                                    <FiTrendingUp />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="stack-list">
                                        {study.stack.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>

                                    <div className="case-study-highlights">
                                        {study.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="case-study-highlight"
                                            >
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>


                <section className="section">
                    <SectionTitle
                        eyebrow="Engineering Highlights"
                        title="Frontend systems built for scale"
                        description="Focused on maintainable architecture, reusable systems, accessibility, and production performance."
                    />

                    <div className="highlight-grid">
                        {highlights.map((item) => (
                            <div className="highlight-card" key={item.title}>
                                <div className="icon-wrapper">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section" id="experience">
                    <SectionTitle
                        eyebrow="Experience"
                        title="Professional frontend engineering experience"
                        description="Building scalable enterprise applications and reusable UI systems at AVIZVA."
                    />

                    <div className="experience-card">
                        <div className="experience-header">
                            <div>
                                <h3>Software Development Engineer</h3>
                                <p>AVIZVA Solutions Pvt. Ltd.</p>
                            </div>

                            <span>2024 - Present</span>
                        </div>

                        <ul>
                            <li>Developed scalable React.js applications using Redux, TypeScript, and enterprise frontend architecture.</li>
                            <li>Built a custom Rich Text Editor improving content creation efficiency by 60%.</li>
                            <li>Established centralized UI styling standards reducing design inconsistencies by 35%.</li>
                            <li>Worked on React Native and Cordova mobile solutions with optimized API integrations.</li>
                            <li>Improved accessibility and responsive behavior across enterprise dashboards.</li>
                        </ul>
                    </div>

                    <div className="experience-card">
                        <div className="experience-header">
                            <div>
                                <h3>Associate Development Engineer</h3>
                                <p>AVIZVA Solutions Pvt. Ltd.</p>
                            </div>

                            <span>2023 - 2024</span>
                        </div>

                        <ul>
                            <li>Built reusable frontend component libraries reducing UI development time by 45%.</li>
                            <li>Implemented Storybook-based documentation improving onboarding speed by 20%.</li>
                            <li>Delivered 10+ enterprise features within Agile sprint cycles.</li>
                            <li>Implemented Micro Frontend architecture enabling independent deployments.</li>
                        </ul>
                    </div>
                </section>

                <section className="section" id="skills">
                    <SectionTitle
                        eyebrow="Skills"
                        title="Modern frontend engineering stack"
                        description="Technologies and systems used across enterprise-grade frontend applications."
                    />

                    <div className="skills-grid">
                        {Object.entries(skills).map(([category, values]) => (
                            <div className="skills-card" key={category}>
                                <h3>{category}</h3>

                                <div className="skills-list">
                                    {values.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section contact-section" id="contact">
                    <SectionTitle
                        eyebrow="Contact"
                        title="Let’s build scalable frontend experiences"
                        description="Open to frontend engineering opportunities, product-focused teams, and scalable UI architecture work."
                    />

                    <div className="contact-grid">
                        {contactItems.map((item) => (
                            <motion.a
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-card"
                            >

                                <div className="contact-icon">
                                    {item.icon}
                                </div>

                                <div className="contact-content">
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>

                            </motion.a>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
