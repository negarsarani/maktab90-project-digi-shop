/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/featured/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        orangeAdmin: '#F47458',
        orangeLighter: '#FFEDE1',
        orangeSidebar: '#EBCDB9',
        cream: '#F5F5F9',
        grayMedium: '#8A92A6',
        grayLight: '#CFCFCF',
        creamLight: '#F5F5F5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
