module.exports = {
  content: ['./src.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: '#f87171',
        border: '#d1d5db',
        background: '#18181b',
        foreground: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
