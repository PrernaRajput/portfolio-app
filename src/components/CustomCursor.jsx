
import React, { useEffect, useState } from 'react';

export default function CustomCursor () {
    const [position, setPosition] = useState( { x: 0, y: 0 } );

    useEffect( () => {
        const moveCursor = ( e ) => {
            setPosition( { x: e.clientX, y: e.clientY } );
        };
        window.addEventListener( 'mousemove', moveCursor );
        return () => window.removeEventListener( 'mousemove', moveCursor );
    }, [] );

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                borderRadius: '0',
                pointerEvents: 'none',
                zIndex:'66',
                background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(147, 197, 253, 0.12), transparent 80%)`,
                transition: 'background 0.1s ease-out',
            }}
        />
    );
}
