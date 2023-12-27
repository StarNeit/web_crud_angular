/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  important: '#tw-root',
  corePlugins: {
    // Avoid conflicting with Nebula
    preflight: false,
  },
  plugins: [],
};
