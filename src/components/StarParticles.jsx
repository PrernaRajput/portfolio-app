import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default function StarParticles () {
    const customInit = useCallback( async ( engine ) => {
        // Load the "stars" preset
        await loadStarsPreset( engine );
    }, [] );

    return (
        <Particles
            id="tsparticles"
            init={customInit}
            options={{
                preset: 'stars',
                background: {
                    color: {
                        value: '#000003',
                    },
                },
                fullScreen: {
                    enable: true,
                    zIndex: 0,
                },
                particles: {
                    number: {
                        value: 200,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
