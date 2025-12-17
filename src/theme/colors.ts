/**
 * 🎨 Design System - Cores
 * 
 * FONTE ÚNICA DA VERDADE para todas as cores do app.
 * 
 * Para rebranding, altere APENAS este arquivo.
 * Todos os componentes e o Tailwind herdam daqui.
 */

export const colors = {
    // 🟢 BRAND: Identidade da marca
    brand: {
        DEFAULT: "#46ec13",    // Verde Neon Principal
        muted: "#2db80d",      // Verde mais escuro (estados secundários)
        highlight: "rgba(70, 236, 19, 0.15)", // Glow sutil
    },

    // 🌑 UI: Base da interface (Glassmorphism & Dark Mode)
    ui: {
        bg: "#142210",         // Fundo principal
        bgSecondary: "#1A1F16", // Fundo de cards sólidos
        surface: "rgba(255, 255, 255, 0.05)", // Vidro base
        border: "rgba(255, 255, 255, 0.08)",  // Borda de vidro
        highlight: "rgba(255, 255, 255, 0.15)", // Reflexo de vidro
    },

    // ✍️ TEXT: Hierarquia de leitura
    text: {
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        muted: "#52525B",
    },

    // ⚠️ STATUS: Feedback visual
    status: {
        error: "#EF4444",
        success: "#46ec13",
        warning: "#F59E0B",
    },

    // 🌈 GRADIENTS: Cores para gradientes
    gradients: {
        bgTop: "#2c4823",
        bgMid: "#1a2d15",
        bgBottom: "#142210",
    },
} as const;

// Tipo para uso em TypeScript
export type Colors = typeof colors;
