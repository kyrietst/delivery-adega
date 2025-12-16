/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#46ec13", // ← Verde neon (correto)
                "background-light": "#f6f8f6",
                "background-dark": "#142210",
                background: "#142210", // ← Fundo verde escuro
                "glass-border": "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                regular: ["Inter_400Regular"],
                bold: ["Inter_700Bold"],
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                neon: "0 0 10px rgba(70, 236, 19, 0.3), 0 0 20px rgba(70, 236, 19, 0.1)",
                glow: "0 0 20px rgba(70, 236, 19, 0.3)",
                "glow-sm": "0 0 10px rgba(70, 236, 19, 0.2)",
            },
        },
    },
    plugins: [],
};
