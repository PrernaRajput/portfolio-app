const config = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: '#0a192f',
                glow: 'rgba(139,92,246,0.1)',
                //Dark theme
                gunmetal: "#000814",
                spaceCadet: "#000003",
                coolGray: "#85C4FF",
                ashGray: "#FFC300",
                antiFlashWhite: "#FFFCF2",
                // Light theme
                bgLight: "#FFFCF2",
                textLight: "#1E1E1E",
                primaryLight: "#5EABD6",
                secondaryLight: "#FFB4B4",
                accentLight: "#E14434",
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
