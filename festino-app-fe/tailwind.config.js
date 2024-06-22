/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: {
          700: {
            DEFAULT: '#3082F6',
            light: 'rgba(48, 130, 246, 0.4)',
          },
          500: '#4fa3ff',
          300: '#cfe3ff',
          100: '#f5f6f8',
          50: 'rgba(0, 0, 0, 0.03)',
        },
        secondary: {
          700: '#222222',
          500: '#444444',
          300: '#999999',
          100: '#CCCCCC',
          50: '#EEEEEE',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('textColor'),
      }),
      fontFamily: {
        pretendard: ['Pretendard Variable'],
        jalnan2: ['jalnan2'],
      },
    },
  },
  plugins: [],
};
