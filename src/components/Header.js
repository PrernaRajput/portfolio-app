
import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header () {
    const [showHeader, setShowHeader] = useState( true );
    const [lastScrollY, setLastScrollY] = useState( 0 );

    const controlHeader = () => {
        if ( window.scrollY > lastScrollY ) {
            setShowHeader( false );
        } else {
            setShowHeader( true );
        }
        setLastScrollY( window.scrollY );
    };

    useEffect( () => {
        window.addEventListener( 'scroll', controlHeader );
        return () => window.removeEventListener( 'scroll', controlHeader );
    } );

    return (
        <header className={showHeader ? 'header show' : 'header hide'}>
            <nav>
                <a href="#landing">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="https://linkedin.com/in/prerna" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/PrernaRajput" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
        </header>
    );
}
