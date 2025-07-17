const config = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#0a192f',
                glow: 'rgba(139,92,246,0.1)',
                //Dark theme
                accentDark: "#85C4FF",
                bodyBgColorDark: "#000814",
                navBgColorDark: "#000003",
                textHighlightDark: "#FFC300",
                textColorDark: "#FFFCF2",
                // Light theme
                accentLight:"#90a9ff",
                bodyBgColor: "#fde2e8",
                navBgColor: "#FFFCF2",
                textHighlight: "#FF38A2",
                textColor: "#a844f4",
                //
                cardBgLight: "#f0f8ff",
                navBgColorLight: "#a02323f2",
                textHighlighLight: "#FFC300",
                textColorLight: "#1E1E1E",
                //spring theme
                springBg: '#E0F7FA',
                sunnyPrimary: '#FDD835',
                coralAccent: '#E14434',
                mintSecondary: '#A5D6A7',
                textDark: '#333333',
                
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
