/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                // Brand
                primary: "#46ec13",
                "primary-muted": "#2db80d",

                // Backgrounds
                background: "#142210",
                "background-dark": "#142210",
                "background-light": "#f6f8f6",
                "background-secondary": "#1A1F16",

                // Glass (Glassmorphism)
                "glass-border": "rgba(255, 255, 255, 0.08)",
                "glass-surface": "rgba(255, 255, 255, 0.03)",
                "glass-highlight": "rgba(255, 255, 255, 0.15)",
                "glass-bg": "rgba(20, 34, 16, 0.4)",

                // Text hierarchy
                "text-primary": "#FFFFFF",
                "text-secondary": "#A1A1AA",
                "text-muted": "#52525B",
            },
            fontFamily: {
                display: ["Manrope", "Inter", "sans-serif"],
                regular: ["Inter_400Regular"],
                bold: ["Inter_700Bold"],
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                neon: "0 0 10px rgba(70, 236, 19, 0.3), 0 0 20px rgba(70, 236, 19, 0.1)",
                glow: "0 0 20px rgba(70, 236, 19, 0.3)",
                "glow-sm": "0 0 10px rgba(70, 236, 19, 0.2)",
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
