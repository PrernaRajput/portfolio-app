import React from 'react';

export default function Footer () {
    return (
        <footer className="bg-spaceCadet text-coolGray py-6 text-center text-sm border-t border-gunmetal">
            <p>
                © {new Date().getFullYear()} Prerna Rajput. Built with React, Tailwind & <span className="text-ashGray">🩵</span>
            </p>
        </footer>
    );
}
