import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    50: '#faf8f6',
                    100: '#f5f1ed',
                    200: '#ebe3db',
                    300: '#ddd0c5',
                    400: '#c9a891',
                    500: '#b5815d',
                    600: '#a1694b',
                    700: '#7d523b',
                    800: '#59402b',
                    900: '#3d2b1d',
                },
                'accent': {
                    light: '#ff9f43',
                    dark: '#e06c3c',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}

export default config
