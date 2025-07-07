import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function CloudParticles () {
    const init = useCallback( async ( engine ) => {
        await loadFull( engine );
    }, [] );

    return (
        <Particles
            id="tsparticles"
            init={init}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: 0,
                },
                background: {
                    color: {
                        value: '#0000', // light sky blue
                    },
                },
                particles: {
                    number: {
                        value: 20,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: '#ffffff',
                    },
                    opacity: {
                        value: 0.2,
                        random: true,
                    },
                    size: {
                        value: 80,
                        random: true,
                    },
                    move: {
                        enable: true,
                        direction: 'top',
                        speed: 0.2,
                        outMode: 'out',
                    },
                    shape: {
                        type: 'char',
                        character: {
                            value: ['🌸', '☀️', '🍃'],
                            font: 'Verdana',
                            style: '',
                            weight: '8',
                            fill: false,
                        }
                    },
                },
            }}
        />
    );
}
