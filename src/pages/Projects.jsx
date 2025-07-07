import React from 'react';
import useInView from '../hooks/useInView';

export default function Projects () {
    const [ref, isVisible] = useInView( { threshold: 0.1 } );

    return (
        <section
            ref={ref}
            className={`max-w-4xl mx-auto px-6 py-16 transition-all duration-1000 transform 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-3xl font-bold text-ashGray mb-6">Projects</h2>

            <div className="space-y-10 text-antiFlashWhite">
                <div className="p-4 rounded-md border border-gunmetal hover:bg-spaceCadet transition duration-300 hover:shadow-lg hover:shadow-ashGray/10">
                    <h3 className="text-xl font-semibold text-coolGray">Custom CSS Layout Utility Library</h3>
                    <p className="mt-2 text-sm text-ashGray">
                        Technologies: HTML5, CSS3, SASS, Webpack
                    </p>
                    <p className="mt-2">
                        • Developed a high-performance, scalable CSS utility library using HTML and CSS to auto-align and structure
                        page widgets using markup attributes, eliminating the need for custom CSS per page and improving
                        website load times by 15%. Integrated this library into 2+ projects, resulting in 15% reduction in
                        development time.<br />
                        • Reduced layout-related CSS codebase size by 30% and accelerated development of new pages.<br />
                        • Introduced in 3+ internal projects to enforce design consistency and eliminate layout bugs.<br />
                        • Implemented lazy loading and caching techniques to optimize the library's performance, resulting in a 10%
                        reduction in page load times. This improved the user experience and reduced server load.<br />
                    </p>
                </div>

                <div className="p-4 rounded-md border border-gunmetal hover:bg-spaceCadet transition duration-300 hover:shadow-lg hover:shadow-ashGray/10">
                    <h3 className="text-xl font-semibold text-coolGray">Access-Based Fallback Routing System</h3>
                    <p className="mt-2 text-sm text-ashGray">
                        Technologies: React.js, React Router, JavaScript, Redux, RBAC
                    </p>
                    <p className="mt-2">
                        • Implemented a role-aware fallback routing mechanism using API Integration for a large-scale React.js
                        application, improving user experience and reducing customer support tickets related to navigation errors
                        by 10%. This involved integrating with a Role-Based Access Control (RBAC) system and managing access
                        permissions.<br />
                        • Automatically redirected users to appropriate fallback pages based on access permissions and access
                        control, preventing unauthorized content access.<br />
                        • Integrated with RBAC (Role-Based Access Control) layer and centralized permission checks across 25+
                        routes.<br />
                        • Improved user experience and reduced customer support tickets related to navigation errors by 10%.<br />
                    </p>
                </div>
            </div>
        </section>
    );
}
