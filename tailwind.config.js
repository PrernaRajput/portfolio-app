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
                gunmetal: "#222831",
                spaceCadet: "#333446",
                coolGray: "#7f8caa",
                ashGray: "#b8cfce",
                antiFlashWhite: "#eaefef",
            },
            backgroundImage: {
                gradientTop: "linear-gradient(to top, #222831, #333446, #7f8caa, #b8cfce, #eaefef)",
                gradientBottom: "linear-gradient(to bottom, #222831, #333446, #7f8caa, #b8cfce, #eaefef)",
                gradientRight: "linear-gradient(to right, #222831, #333446, #7f8caa, #b8cfce, #eaefef)",
                gradientRadial: "radial-gradient(circle, #222831, #333446, #7f8caa, #b8cfce, #eaefef)",
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
