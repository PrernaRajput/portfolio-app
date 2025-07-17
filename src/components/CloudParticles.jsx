import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function CloudParticles() {
    const init = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

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
                        value: '#FFFCF2', // light background for day theme
                    },
                },
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: '#85c4ff', // cloud-like white circles
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                    },
                    size: {
                        value: 60,
                        random: {
                            enable: true,
                            minimumValue: 30,
                        },
                    },
                    move: {
                        enable: true,
                        direction: 'top',
                        speed: 0.2,
                        outModes: {
                            default: 'out',
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
