module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary colors
                primary: {
                    50: "#f5f5f5",
                    100: "#ebebeb",
                    200: "#d7d7d7",
                    300: "#c2c2c2",
                    400: "#a8a8a8",
                    500: "#8d8d8d",
                    600: "#737373",
                    700: "#595959",
                    800: "#3f3f3f",
                    900: "#1a1a1a",
                },
                // Orange accents
                accent: {
                    dark: "#d97706",   // Dark orange (#d97706)
                    light: "#f59e0b",  // Light orange (#f59e0b)
                    lighter: "#fbbf24", // Even lighter for hover states
                },
                // Neutral colors
                neutral: {
                    white: "#ffffff",
                    light: "#f8f9fa",
                    gray: "#e5e7eb",
                    dark: "#1f2937",
                }
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            spacing: {
                "128": "32rem",
            },
            boxShadow: {
                'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}
