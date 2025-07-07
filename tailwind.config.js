const config = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: '#0a192f',
                primary: '#64ffda',
                secondary: '#38bdf8',
                heading: '#ffffff',
                body: '#cbd5e1',
                muted: '#94a3b8',
                cursorGlow: 'rgba(100,255,218,0.12)',
                galaxy: '#0b0c1e',
                star: '#f1f5f9',
                cosmic: '#8b5cf6',
                nebula: '#38bdf8',
                dust: '#64748b',
                glow: 'rgba(139,92,246,0.1)',
                gunmetal: "#000814",
                spaceCadet: "#000003",
                coolGray: "#85C4FF",
                ashGray: "#FFC300",
                antiFlashWhite: "#FFFCF2",
            },
            backgroundImage: {
                gradientTop: "linear-gradient(to top, #000814, #001D3D, #003566, #FFC300, #FFFCF2)",
                gradientBottom: "linear-gradient(to bottom, #000814, #001D3D, #003566, #FFC300, #FFFCF2)",
                gradientRight: "linear-gradient(to right, #000814, #001D3D, #003566, #FFC300, #FFFCF2)",
                gradientRadial: "radial-gradient(circle, #000814, #001D3D, #003566, #0f0e27, #000003)",
            },
            animation: {
                moveStars: 'moveStars 300s linear infinite',
            },
            keyframes: {
                moveStars: {
                    from: { backgroundPosition: '0 0' },
                    to: { backgroundPosition: '10000px 10000px' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
