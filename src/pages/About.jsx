import React from 'react';
import useInView from '../hooks/useInView';

export default function About() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-6">About Me</h2>
      <div className="text-gray-300 space-y-4">
        <p>
          I’m Prerna Rajput, a front-end developer with 2 years of experience crafting modern, responsive, and accessible user interfaces.
        </p>
        <p>
          I currently work at <strong>AVIZVA</strong> as a Software Development Engineer I. My work involves building reusable UI components, rich text editors, and scalable frontend architecture with React, TypeScript, and modern CSS.
        </p>
        <p>
          I'm passionate about clean, performant code and love transforming design systems into elegant, maintainable interfaces. I've also mentored new developers and helped standardize code practices across the team.
        </p>
        <p>
          When I'm not coding, I’m exploring new design patterns or contributing to internal libraries and tooling.
        </p>
      </div>
    </section>
  );
}
