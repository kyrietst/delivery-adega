const { colors } = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                // 🟢 BRAND: Importado de colors.ts
                brand: {
                    DEFAULT: colors.brand.DEFAULT,
                    muted: colors.brand.muted,
                    highlight: colors.brand.highlight,
                },

                // 🌑 UI: Importado de colors.ts
                ui: {
                    bg: colors.ui.bg,
                    "bg-secondary": colors.ui.bgSecondary,
                    surface: colors.ui.surface,
                    border: colors.ui.border,
                    highlight: colors.ui.highlight,
                },

                // ✍️ TEXT: Importado de colors.ts
                text: {
                    primary: colors.text.primary,
                    secondary: colors.text.secondary,
                    muted: colors.text.muted,
                },

                // ⚠️ STATUS: Importado de colors.ts
                status: {
                    error: colors.status.error,
                    success: colors.status.success,
                    warning: colors.status.warning,
                },

                // 🔙 LEGADO: Mantendo compatibilidade temporária
                primary: colors.brand.DEFAULT,
                "background-dark": colors.ui.bg,
            },
            fontFamily: {
                display: ["Manrope", "Inter", "sans-serif"],
                body: ["Inter_400Regular"],
                bold: ["Inter_700Bold"],
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                neon: `0 0 10px ${colors.brand.highlight}, 0 0 20px rgba(70, 236, 19, 0.1)`,
            },
        },
    },
    plugins: [],
};
