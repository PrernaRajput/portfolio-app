
import React from 'react';

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Projects</h2>
      <div className="space-y-10 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold">Custom CSS Layout Utility Library</h3>
          <p className="mt-2 text-sm text-gray-400">Technologies: HTML5, CSS3, SASS, Webpack</p>
          <p className="mt-2">
            Built a scalable CSS utility library to auto-align page widgets using markup attributes,
            eliminating the need for per-page custom CSS and reducing layout-related code by 30%. 
            Integrated the library into 3+ projects, cutting page load times by 15%.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Access-Based Fallback Routing System</h3>
          <p className="mt-2 text-sm text-gray-400">Technologies: React.js, React Router, JavaScript, Redux, RBAC</p>
          <p className="mt-2">
            Implemented a role-aware fallback routing system in a large-scale React app. Integrated with RBAC
            to manage permissions across 25+ routes, improving navigation UX and reducing support tickets by 10%.
          </p>
        </div>
      </div>
    </section>
  );
}
