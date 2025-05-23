/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: 'var(--font-poppins)',
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			screens: {
				xs: '440px',
			},
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
				success: 'rgb(var(--color-success) / <alpha-value>)',
        blue:"#102852",
        gray: {
					400: 'rgb(var(--color-gray-400) / <alpha-value>)',
					100: 'rgb(var(--color-gray-100) / <alpha-value>)',
				},
      },
      height: {
				nav: 'calc(100vh - 96px);',
			},
    },
  },
  plugins: [],
}
