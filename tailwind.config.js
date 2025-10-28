module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                forest: { light: '#A7C957', DEFAULT: '#6A994E', dark: '#386641' },
                earth: { light: '#F2E8CF', DEFAULT: '#B7B7A4', dark: '#A98467' },
                moss: '#9BC53D',
                stone: '#606C38',
                accent: '#FFB000',
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif']
            }
        },
    },
    plugins: [],
}
