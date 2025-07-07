import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar () {
    const location = useLocation();

    return (
        <header className="bg-spaceCadet text-antiFlashWhite sticky top-0 z-50 shadow-md border-b border-gunmetal backdrop-blur-md bg-opacity-95">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="font-bold text-ashGray text-lg tracking-wide">
                    Prerna Rajput
                </div>

                <ul className="flex space-x-6 text-sm font-medium">
                    {navItems.map( ( item ) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`transition-colors duration-200 ${location.pathname === item.path
                                    ? 'text-ashGray'
                                    : 'text-coolGray hover:text-ashGray'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ) )}
                    <ThemeToggle />
                </ul>
            </nav>
        </header>
    );
}
