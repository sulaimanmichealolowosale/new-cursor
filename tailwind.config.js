module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1a1a1a",
                secondary: "#0066ff",
                accent: "#ff6b35",
                light: "#f8f9fa",
                dark: "#0f0f0f",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            spacing: {
                "128": "32rem",
            },
        },
    },
    plugins: [],
}
