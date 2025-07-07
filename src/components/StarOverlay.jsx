export default function StarOverlay () {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-0 opacity-20"
            style={{
                backgroundImage: "url('./assets/stars.jpg')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                animation: "moveStars 300s linear infinite",
                zIndex: 66
            }}
        ></div>
    );
}
