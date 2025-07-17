import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle () {
    const [isDark, setIsDark] = useState( () => {
        return localStorage.getItem( 'theme' ) === 'dark' ||
            ( !localStorage.getItem( 'theme' ) && window.matchMedia( '(prefers-color-scheme: dark)' ).matches );
    } );

    useEffect( () => {
        document.documentElement.classList.toggle( 'dark', isDark );
        localStorage.setItem( 'theme', isDark ? 'dark' : 'light' );
    }, [isDark] );

    return (
        <button
            onClick={() => setIsDark( !isDark )}
            aria-label="Toggle Dark Mode"
            className={`w-14 h-8 flex items-center px-1 rounded-full border transition-colors duration-300
        ${isDark ? 'bg-textHighlight border-textHighlight' : 'bg-accentLight border-accentLight'}`}
        >
            <div
                className={`w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs transition-transform duration-300
          transform ${isDark ? 'translate-x-6 bg-bodyBgColor text-textHighlight' : 'translate-x-0 bg-white text-accentLight'}`}
            >
                {isDark ? <FaMoon /> : <FaSun />}
            </div>
        </button>
    );
}
