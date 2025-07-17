import React from 'react';
import useInView from '../hooks/useInView';

export default function About () {
    const [ref, isVisible] = useInView( { threshold: 0.1 } );

    return (
        <section
            ref={ref}
            className={`max-w-4xl mx-auto px-6 py-16 transition-all duration-1000 transform 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-3xl font-bold text-textHighlight dark:text-textHighlightDark mb-6">About Me</h2>

            <div className="text-textColor dark:text-textColorDark space-y-5 leading-relaxed">
                <p>
                    I’m <span className="dark:text-accentDark text-accentLight font-medium">Prerna Rajput</span>, a front-end developer with 2 years of experience crafting modern,
                    responsive, and accessible user interfaces.
                </p>
                <p>
                    I currently work at <strong className="dark:text-accentDark text-accentLight">AVIZVA</strong> as a Software Development Engineer I. My work involves building reusable UI components,
                    rich text editors, and scalable frontend architecture using React, TypeScript, and modern CSS tooling.
                </p>
                <p>
                    I'm passionate about clean, performant code and love transforming design systems into elegant,
                    maintainable interfaces. I've also mentored junior developers and helped standardize frontend practices.
                </p>
                <p>
                    When I'm not coding, I enjoy exploring new design patterns, building UI tools, or contributing
                    to internal libraries and documentation.
                </p>
            </div>
        </section>
    );
}
