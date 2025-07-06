import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-teal-500 text-lg">Prerna Rajput</div>
        <ul className="flex space-x-6 text-sm">
          {navItems.map(item => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-teal-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}