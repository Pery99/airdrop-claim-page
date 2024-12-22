module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Updated to modern indigo
        secondary: "#818CF8",
        accent: "#F472B6",
        dark: "#0F172A",
        "dark-card": "rgba(16, 24, 40, 0.6)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        'cyber-pattern': "url('/pattern.svg')",
        'gradient-dark': 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(244, 114, 182, 0.1))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
