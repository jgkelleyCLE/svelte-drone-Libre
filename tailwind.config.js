import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 2px 1px #dc2626c8, 0 0 10px 2px rgba(255, 0, 0, 0.3), 0 0 15px 3px rgba(255, 0, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 8px 2px rgba(255, 0, 0, 0.7), 0 0 12px 4px rgba(255, 0, 0, 0.5), 0 0 20px 6px rgba(255, 0, 0, 0.3)',
          },
        },
        ping: {
          '0%': {
            transform: 'scale(0.9)',
            boxShadow: '0 0 0 0 rgba(231, 114, 9, 0.9)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 15px rgba(255, 82, 82, 0)',
          },
        },
        pingDark: {
          '0%': {
            transform: 'scale(0.9)',
            boxShadow: '0 0 0 0 rgba(63, 146, 0, 0.663)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 15px rgba(96, 12, 13, 0)',
          },
        },
      },
      animation: {
        glow: 'glow 10s infinite',
        'spin-slow': 'spin 3s linear infinite',
        ping: 'ping 5s ease-out infinite',
        darkPing: 'pingDark 4s ease-out infinite',
      },
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
