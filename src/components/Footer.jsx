import React from 'react';

export default function Footer () {
    return (
        <footer className="bg-black text-gray-500 py-6 text-center text-sm border-t border-gray-700">
            <p>
                © {new Date().getFullYear()} Prerna Rajput. Built with React, Tailwind & 🩵
            </p>
        </footer>
    );
}
