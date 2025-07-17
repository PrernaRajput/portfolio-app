import React from 'react';

export default function Footer () {
    return (
        <footer className="dark:bg-navBgColorDark bg-navBgColor sticky bottom-0 z-50 dark:text-accentDark text-accentLight py-6 text-center text-sm border-t dark:border-bodyBgColorDark border-bodyBgColor">
            <p>
                © {new Date().getFullYear()} Prerna Rajput. Built with React, Tailwind & <span className="text-textHighlight dark:text-textHighlightDark">🩵</span>
            </p>
        </footer>
    );
}
