import { FaSun, FaMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

export default function ThemeToggle () {
    const dispatch = useDispatch();
    const isDark = useSelector( ( state ) => state.theme.mode === 'dark' );

    return (
        <button
            onClick={() => dispatch( toggleTheme() )}
            aria-label="Toggle Dark Mode"
            className="w-14 h-8 flex items-center px-1 rounded-full border bg-accentLight border-accentLight dark:bg-textHighlightDark dark:border-textHighlightDark transition-colors duration-300"
        >
            <div
                className={`w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs transition-transform duration-300 bg-white text-accentLight dark:bg-bodyBgColorDark dark:text-textHighlightDark ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
            >
                {isDark ? <FaMoon /> : <FaSun />}
            </div>
        </button>
    );
}
