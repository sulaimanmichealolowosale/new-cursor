/**
 * Premium Theme Transition Utilities
 * Ensures smooth color transitions across the entire app
 * Complements dark mode theme toggle
 */

import { useEffect } from 'react'

/**
 * Apply smooth CSS transitions for theme changes
 * Call once in App.jsx or main component wrapper
 */
export const enableSmoothThemeTransitions = () => {
    const style = document.createElement('style')
    style.textContent = `
        /* Smooth color transitions for theme toggle */
        * {
            @supports (transition: color 0.3s) {
                transition: color 0.3s ease, background-color 0.3s ease, 
                           border-color 0.3s ease, box-shadow 0.3s ease;
            }
        }

        /* Prevent transition on initial page load */
        html.no-transition,
        html.no-transition *,
        html.no-transition *::before,
        html.no-transition *::after {
            transition: none !important;
        }

        /* Optimize for motion preferences */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `
    document.head.appendChild(style)
}

/**
 * Hook to handle smooth transitions between light/dark mode
 * @example
 * const { isDark, toggleTheme } = useTheme()
 * useThemeTransition(isDark) // Must be in a component
 */
export const useThemeTransition = (isDark) => {
    useEffect(() => {
        // Add class to enable transitions after initial load
        const html = document.documentElement

        if (!html.classList.contains('theme-initialized')) {
            html.classList.add('no-transition')
            setTimeout(() => {
                html.classList.remove('no-transition')
                html.classList.add('theme-initialized')
            }, 10)
        }
    }, [isDark])
}

/**
 * Animation-safe color transition palette
 * Use for components that need explicit color transitions
 * 
 * @example
 * <div style={{
 *   color: isDark ? colors.text.dark : colors.text.light,
 *   backgroundColor: isDark ? colors.bg.dark : colors.bg.light,
 *   transition: 'color 0.3s ease, background-color 0.3s ease'
 * }}>
 *   Content
 * </div>
 */
export const themeColors = {
    text: {
        light: '#1a1a1a',     // primary-900
        dark: '#ffffff',      // white
        muted: {
            light: '#666666', // primary-600
            dark: '#b3b3cc'   // primary-300
        }
    },
    bg: {
        light: '#ffffff',
        dark: '#111111'       // primary-900
    },
    accent: {
        light: '#f59e0b',     // orange-400
        dark: '#d97706'       // orange-600
    },
    border: {
        light: '#e5e5e5',     // primary-200
        dark: '#333333'       // primary-700
    },
    shadow: {
        light: 'rgba(0, 0, 0, 0.1)',
        dark: 'rgba(0, 0, 0, 0.3)'
    }
}

/**
 * High-performance shadow transitions
 * @param {boolean} isDark - Current theme
 * @param {string} intensity - 'sm', 'md', 'lg', 'xl'
 */
export const getShadowForTheme = (isDark, intensity = 'md') => {
    const shadows = {
        sm: isDark ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: isDark ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: isDark ? '0 10px 15px rgba(0, 0, 0, 0.4)' : '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: isDark ? '0 20px 25px rgba(0, 0, 0, 0.4)' : '0 20px 25px rgba(0, 0, 0, 0.1)',
    }
    return shadows[intensity] || shadows.md
}

/**
 * Framer Motion variant for smooth theme transitions
 * @example
 * <motion.div variants={themeTransitionVariants} animate={isDark ? 'dark' : 'light'}>
 */
export const themeTransitionVariants = {
    light: {
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
    dark: {
        backgroundColor: '#111111',
        color: '#ffffff',
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
}
