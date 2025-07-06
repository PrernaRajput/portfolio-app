
const skills = [
  'React.js', 'Redux', 'JavaScript (ES6)', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'SCSS',
  'Jest', 'Webpack', 'Git', 'Bitbucket', 'Node.js', 'REST APIs', 'Bootstrap', 'Azure', 'JIRA', 'Jenkins'
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
        {skills.map(skill => (
          <li key={skill} className="bg-gray-800 px-4 py-2 rounded-md text-sm text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
